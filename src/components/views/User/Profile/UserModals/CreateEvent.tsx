import { Button } from '@components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@components/ui/dialog'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/ui/form'
import { Input } from '@components/ui/input'
import { useYupValidationResolver } from '@hooks/useYupValidationResolver'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { createEvent } from 'src/schemas/create-event.schema'
import { UserCard } from '../../UserCard'
import { Badge } from '@components/ui/badge'
import { Textarea } from '@components/ui/textarea'

const CreateEvent = () => {
  const methods = useForm({
    resolver: useYupValidationResolver(createEvent),
    defaultValues: {
      event_type: '',
      note: '',
      date: '',
      address: '',
    },
  })
  const { handleSubmit, trigger, setValue } = methods
  const onSubmit = async (data: any) => {
    console.log(data)
    const isValid = await trigger()
    if (isValid) {
      try {
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
  }
  const selectedBadge = (value: string, id: string) => {
    if (value === id && value !== '') {
      return 'bg-primary-blue text-white'
    }
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='w-full'>Crear evento</Button>
      </DialogTrigger>
      <DialogContent className='max-w-[280px] rounded-[16px!important] md:max-w-[300px] p-1'>
        <DialogHeader className='bg-secondary-gray p-2 rounded-lg'>
          <DialogTitle></DialogTitle>
          <UserCard user={{ name: 'Maria Hernandez' }} />
        </DialogHeader>
        <FormProvider {...methods}>
          <form
            className='flex flex-col gap-4 justify-between w-full '
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='w-full shadow-md rounded-lg p-2'>
              <FormField
                control={methods.control}
                name='event_type'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor='event_type'>Evento de tipo</FormLabel>
                    <div className='flex justify-evenly'>
                      <FormControl>
                        <Badge
                          onClick={() => setValue('event_type', 'Nota')}
                          id='event_type'
                          variant='secondary'
                          className={selectedBadge(field.value, 'Nota')}
                        >
                          Nota
                        </Badge>
                      </FormControl>
                      <FormControl>
                        <Badge
                          onClick={() => setValue('event_type', 'Cliente')}
                          id='event_type'
                          variant='secondary'
                          className={selectedBadge(field.value, 'Cliente')}
                        >
                          Cliente
                        </Badge>
                      </FormControl>
                      <FormControl>
                        <Badge
                          onClick={() => setValue('event_type', 'Cita')}
                          id='event_type'
                          variant='secondary'
                          className={selectedBadge(field.value, 'Cita')}
                        >
                          Cita
                        </Badge>
                      </FormControl>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={methods.control}
                name='note'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor='note'>Note</FormLabel>
                    <FormControl>
                      <Textarea
                        id='note'
                        className='bg-secondary-gray'
                        placeholder='Nota'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={methods.control}
                name='date'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor='date'>Fecha</FormLabel>
                    <FormControl>
                      <Input
                        id='date'
                        type='date'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={methods.control}
                name='address'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor='address'>Dirección</FormLabel>
                    <FormControl>
                      <Input
                        id='address'
                        type='address'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='justify-between flex-row flex'>
              <Button
                className='w-5/12 rounded-bl-2xl'
                type='submit'
              >
                Guardar
              </Button>
              <Button
                className='w-5/12 rounded-br-2xl'
                variant='red'
              >
                Descartar
              </Button>
            </div>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}

export default CreateEvent
