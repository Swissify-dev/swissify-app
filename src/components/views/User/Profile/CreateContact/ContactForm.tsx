'use client'
import { FormProvider, useForm } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/ui/form'
import { Input } from '@components/ui/input'
import { useYupValidationResolver } from '@hooks/useYupValidationResolver'
import { ReactNode } from 'react'
import { createContactSchema } from 'src/schemas/create-contact.schema'

const ContactForm = ({ children }: { children: ReactNode }) => {
  const methods = useForm({
    resolver: useYupValidationResolver(createContactSchema),
    defaultValues: {
      name: '',
      lastname: '',
      phone: '',
      address: '',
      civil_status: '',
      rp: '',
      interest: '',
      prize: '',
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
    <FormProvider {...methods}>
      <form
        className='flex gap-4 flex-col justify-between w-full my-6'
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
        </div>

        <div className='w-full'>
          <FormField
            control={methods.control}
            name='phone'
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor='phone'>Teléfono</FormLabel>
                <FormControl>
                  <Input
                    id='phone'
                    type='text'
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
            name='address'
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor='address'>Dirección</FormLabel>
                <FormControl>
                  <Input
                    id='address'
                    type='text'
                    placeholder='1234 Street Blvd'
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
            name='civil_status'
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor='civil_status'>Con quién reside</FormLabel>
                <FormControl>
                  <Input
                    id='civil_status'
                    type='text'
                    placeholder='En pareja'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name='rp'
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor='rp'>Concoe RP</FormLabel>
                <FormControl>
                  <Input
                    id='rp'
                    type='text'
                    placeholder='Sí'
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
            name='prize'
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor='prize'>Premio</FormLabel>
                <FormControl>
                  <Input
                    id='prize'
                    type='text'
                    placeholder='Set 3 pcs, $300'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name='interest'
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor='interest'>Le interesa</FormLabel>
                <FormControl>
                  <Input
                    id='interest'
                    type='text'
                    placeholder='Extractor'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {children}
      </form>
    </FormProvider>
  )
}

export { ContactForm }
