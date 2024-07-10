import { Button } from '@components/ui/button'
import CreateContactModal from './CreateContactModal'

const CreateContactButtons = () => {
  return (
    <>
      {/* <Button
        type='submit'
        variant='primary'
      >
        Guardar
      </Button> */}
      <CreateContactModal />
      <Button variant='red'>Descartar</Button>
    </>
  )
}

export { CreateContactButtons }
