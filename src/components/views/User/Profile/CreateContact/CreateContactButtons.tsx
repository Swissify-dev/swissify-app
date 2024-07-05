import { Button } from '@components/ui/button'

const CreateContactButtons = () => {
  return (
    <>
      <Button
        type='submit'
        variant='primary'
      >
        Guardar
      </Button>
      <Button variant='red'>Descartar</Button>
    </>
  )
}

export { CreateContactButtons }
