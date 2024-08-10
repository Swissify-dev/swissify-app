import { Badge } from '@components/ui/badge'
import { lazy } from 'react'
import ContactsList from './ContactsList'
const Filters = lazy(() => import('../../Filters'))

const ContactsViews = () => {
  return (
    <main className='max-w-5xl m-auto p-10'>
      <section className='flex flex-col gap-4'>
        <Filters />
        <div>
          <Badge className='rounded-full mr-6'>Todos</Badge>
          <Badge className='rounded-full mr-6'>Recientes</Badge>
        </div>
        <ContactsList />
      </section>
    </main>
  )
}

export default ContactsViews
