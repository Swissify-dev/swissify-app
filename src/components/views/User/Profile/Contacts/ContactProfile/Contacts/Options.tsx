import { Button } from '@components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from '@components/ui/drawer'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import React from 'react'
import OffCall from '../../../UserModals/OffCall'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

const Options = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <DotsHorizontalIcon
          width={30}
          height={30}
          color='hsl(var(--primary))'
        />
      </DrawerTrigger>
      <DrawerContent aria-describedby={undefined}>
        <div className='max-w-[26rem] m-auto w-full p-6 flex gap-4 flex-col'>
          <VisuallyHidden>
            <DrawerTitle>Move Goal</DrawerTitle>
          </VisuallyHidden>
          <Button className='w-full'>Crear evento</Button>
          <OffCall />
          <Button
            className='w-full'
            variant='red'
          >
            Eliminar contacto
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default Options
