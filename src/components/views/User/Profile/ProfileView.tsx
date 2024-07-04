'use client'
import { Badge } from '@components/ui/badge'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/ui/form'
import { Input } from '@components/ui/input'
import { useYupValidationResolver } from '@hooks/useYupValidationResolver'
import { Pencil1Icon } from '@radix-ui/react-icons'
import { FormProvider, useForm } from 'react-hook-form'
import { profileSchema } from 'src/schemas/profile.schema'
import { UserCard } from '../UserCard'
import Image from 'next/image'

const ProfileView = () => {
  const methods = useForm({
    resolver: useYupValidationResolver(profileSchema),
    defaultValues: {
      name: '',
      lastname: '',
      email: '',
      phone: '',
    },
  })
  const { handleSubmit, trigger } = methods
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
      <FormProvider {...methods}>
        <form
          className='flex gap-4 justify-between w-full my-6'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='w-full'>
            <FormField
              control={methods.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor='name'>Nombre</FormLabel>
                  <FormControl>
                    <Input
                      id='name'
                      placeholder='Jhon'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={methods.control}
              name='phone'
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor='phone'>Teléfono</FormLabel>
                  <FormControl>
                    <Input
                      id='phone'
                      type='phone'
                      placeholder='1234567890'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='w-full'>
            <FormField
              control={methods.control}
              name='lastname'
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor='lastname'>Apellido</FormLabel>
                  <FormControl>
                    <Input
                      id='lastname'
                      placeholder='Waltz'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={methods.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor='email'>Correo</FormLabel>
                  <FormControl>
                    <Input
                      id='email'
                      type='email'
                      placeholder='alguien@gmail.com'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </FormProvider>
      <div className='flex flex-col gap-4 m-auto w-full items-center'>
        <div className='flex-col max-w-96 w-full rounded-md items-center flex p-4 border-solid border border-slate-200'>
          <h2 className='font-bold text-lg mr-auto mb-2'>Equipo</h2>
          <UserCard />
        </div>
        <div className='flex-col max-w-96 w-full rounded-md items-center flex p-4 border-solid border border-slate-200'>
          <h2 className='font-bold text-lg mr-auto mb-2'>Archivos</h2>
          <p>
            Información cargada para ser procesada por la inteligencia
            artificial.
          </p>
          <div className='flex justify-start gap-2 items-center w-full m-3'>
            <figure className='relative h-10 w-10'>
              <Image
                alt='Pdf de financiaciones del banco asociado'
                src='/icons/pdf.png'
                fill
              />
            </figure>
            <h1 className='text-slate-500'>
              Financiaciones del banco asociado
            </h1>
          </div>
          <div className='flex justify-start gap-2 items-center w-full m-3'>
            <figure className='relative h-10 w-10'>
              <Image
                alt='Contactos importados'
                src='/icons/contacts.png'
                fill
              />
            </figure>
            <h1 className='text-slate-500'>2017 - Contactos importados</h1>
          </div>
          <div className='flex justify-start gap-2 items-center w-full m-3'>
            <figure className='relative h-10 w-10'>
              <Image
                alt='Contactos importados'
                src='/icons/contacts.png'
                fill
              />
            </figure>
            <h1 className='text-slate-500'>2018 - Contactos importados</h1>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProfileView
