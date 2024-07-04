'use client'
import { Badge } from '@components/ui/badge'
import { Pencil1Icon } from '@radix-ui/react-icons'
import { BasicForm } from './BasicForm'
import TopicCard from '../TopicCard'

const ProfileView = () => {
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
      <div className='flex flex-col gap-4 m-auto w-full items-center'>
        <TopicCard
          title='Usuarios'
          users={[{ name: 'Jhon' }, { name: 'Doe' }]}
        />
        <TopicCard
          title='Usuarios'
          users={[{ name: 'Jhon' }, { name: 'Doe' }]}
        >
          <p>
            Información cargada para ser procesada por la inteligencia
            artificial.
          </p>
        </TopicCard>
      </div>
    </main>
  )
}

export default ProfileView
