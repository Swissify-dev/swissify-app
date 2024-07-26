'use client'
import { Pencil1Icon } from '@radix-ui/react-icons'
import { ContactProfileForm } from './ContactProfileForm'
import ContactProfileCard from './ContactProfileCard'
import Historial from './Historial/Historial'
import Reminders from './Reminders/Reminders'
import CreateEvent from '../../UserModals/CreateEvent'
import CreateReminder from '../../UserModals/CreateReminder'
import { Button } from '@components/ui/button'
import OffCall from '../../UserModals/OffCall'
import { Avatar } from '@components/ui/avatar'

const ContactProfileView = () => {
  return (
    <main className='max-w-5xl m-auto p-10'>
      <div className='flex w-full items-center justify-between my-6'>
        <span>XZJ234L01</span>
        <span>Admin</span>
      </div>
      <div className='flex flex-col items-end'>
        <Pencil1Icon />
        <Avatar className='h-20 w-20 rounded-full m-auto' />
      </div>
      <ContactProfileForm />
      <div className='flex max-w-[26rem] flex-col gap-4 m-auto w-full items-center'>
        <ContactProfileCard />
        <Historial />
        <Reminders />
        <CreateEvent />
        <CreateReminder />
        <OffCall />
        <Button
          className='w-full'
          variant='red'
        >
          Eliminar contacto
        </Button>
      </div>
    </main>
  )
}

export default ContactProfileView
