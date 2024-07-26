import { FormProvider, useForm } from 'react-hook-form'
import { ContactProfileSchema } from 'src/schemas/profile.schema'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/ui/form'
import { Input } from '@components/ui/input'
import { useYupValidationResolver } from '@hooks/useYupValidationResolver'

const ContactProfileForm = () => {
  const methods = useForm({
    resolver: useYupValidationResolver(ContactProfileSchema.getSchema()),
    defaultValues: {
      name: '',
      lastname: '',
      email: '',
      phone: '',
      address: '',
      hbd: '',
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
        className='flex flex-col gap-4 justify-between w-full my-6'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='flex flex-row gap-4'>
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
        </div>

        <div className='w-full flex flex-col'>
          <FormField
            control={methods.control}
            name='address'
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor='address'>Dirección</FormLabel>
                <FormControl>
                  <Input
                    id='address'
                    placeholder='1234 Street Blvd, 89122, Las Vegas, NV'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={methods.control}
            name='hbd'
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor='hbd'>Cumpleaños</FormLabel>
                <FormControl>
                  <Input
                    id='hbd'
                    type='date'
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
  )
}

export { ContactProfileForm }
