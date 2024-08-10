'use client'
import { Pencil1Icon } from '@radix-ui/react-icons'
import { BasicForm } from '../BasicForm'
import { Badge } from '@components/ui/badge'
import { Card } from '@components/ui/card'
import { UserCard } from '../../UserCard'
import { Button } from '@components/ui/button'
import MainProfileFiles from './MainProfileFiles'

const MainProfileView = () => {
  return (
    <main className='max-w-5xl m-auto p-10'>
      <div className='flex w-full items-center justify-between my-6'>
        <span>XZJ234L01</span>
        <span>Admin</span>
      </div>
      <div className='flex flex-col items-end'>
        <Pencil1Icon />
        <Badge className='h-20 w-20 rounded-full m-auto' />
      </div>
      <BasicForm />
      <section className='w-full flex flex-col gap-4'>
        <Card>
          <h3 className='font-bold text-lg'>Equipo</h3>
          <div className='flex flex-col gap-5'>
            <UserCard user={{ name: 'Erick Jonson' }} />
          </div>
        </Card>
        <Card>
          <h3 className='font-bold text-lg'>Telemarketing</h3>
          <div className='flex flex-col gap-5'>
            <UserCard user={{ name: 'John Asistente' }} />
          </div>
          <div className='w-full flex items-center justify-center mt-4'>
            <Button variant='ghost'>Ver todos</Button>
          </div>
        </Card>
        <MainProfileFiles />
      </section>
    </main>
  )
}

export default MainProfileView
