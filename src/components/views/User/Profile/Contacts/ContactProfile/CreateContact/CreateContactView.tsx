import { ContactForm } from './ContactForm'
import { CreateContactButtons } from './CreateContactButtons'
import { Note } from './Note'

const CreateContact = () => {
  return (
    <main className='max-w-5xl m-auto p-10'>
      <h1 className='text-3xl font-bold'>Crear contacto</h1>
      <ContactForm>
        <Note />
        <CreateContactButtons />
      </ContactForm>
    </main>
  )
}

export { CreateContact }
