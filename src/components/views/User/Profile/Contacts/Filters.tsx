'use client'
import { Badge } from '@components/ui/badge'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@components/ui/drawer'
import React, { useState } from 'react'

const Filters = () => {
  const [filters, setFilters] = useState([
    {
      value: 'Fecha',
      selected: false,
    },
    {
      value: 'Hoy',
      selected: false,
    },
    {
      value: 'Ayer',
      selected: false,
    },
    {
      value: 'Semana pasada',
      selected: false,
    },
    {
      value: 'En cita',
      selected: false,
    },
    {
      value: 'Off Call',
      selected: false,
    },
    {
      value: 'Abordaje',
      selected: false,
    },
    {
      value: 'Referido',
      selected: false,
    },
    {
      value: 'Cliente',
      selected: false,
    },
  ])
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className='ml-auto'>
          <Badge variant='ActionIconD'>Filtros</Badge>
        </div>
      </DrawerTrigger>
      <DrawerContent aria-describedby={undefined}>
        <div className='max-w-[26rem] m-auto flex-col w-full p-6 flex gap-4'>
          <DrawerHeader>
            <DrawerTitle className='font-bold'>Filtros</DrawerTitle>
          </DrawerHeader>
          <div className='flex flex-wrap gap-3'>
            {filters.map((filter, index) => (
              <Badge
                key={filter.value}
                className='rounded-full w-fit min-w-20 justify-center font-normal'
                variant={
                  filter.selected ? 'ActionIconD' : 'secondary' || 'ActionIconD'
                }
                onClick={() =>
                  setFilters(
                    filters.map((f, i) =>
                      i === index ? { ...f, selected: !f.selected } : f
                    )
                  )
                }
              >
                {filter.value}
              </Badge>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default Filters
