'use client'
import { Badge } from '@components/ui/badge'
import { Button } from '@components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from '@components/ui/dialog'

const CreateContactModal = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger className='w-full'>
          <Button
            type='submit'
            variant='primary'
            className='w-full'
          >
            Guardar
          </Button>
        </DialogTrigger>
        <DialogContent className='max-w-96'>
          <DialogHeader>
            <div className='flex justify-start gap-5 items-center rounded-md p-3 bg-secondary-gray'>
              <Badge className='h-12 w-12 rounded-full' />
              <h1>María Hernández</h1>
            </div>
          </DialogHeader>
          <div className='border p-4 gap-4 justify-center items-center flex flex-col border-solid border-secondary-gray'>
            <p>Guardar como abordaje o referencia: </p>
            <div className='flex flex-row justify-between w-full max-w-[17rem]'>
              <Button className='rounded-full'>Abordaje</Button>
              <Button
                className='rounded-full'
                variant='yellow'
              >
                Referencia
              </Button>
            </div>
          </div>
          <DialogFooter className='flex w-full justify-between'>
            <Button className='h-12'>Guardar</Button>
            <Button
              className='h-12'
              variant='red'
            >
              Descartar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CreateContactModal
