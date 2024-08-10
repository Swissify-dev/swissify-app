import { Input } from '@components/ui/input'
import ContactCard from './ContactCard'

const ContactsList = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Input />
      <span className='font-bold'>206 Contactos</span>
      <div className='flex flex-col gap-4 items-center'>
        <ContactCard />
      </div>
    </div>
  )
}

export default ContactsList
