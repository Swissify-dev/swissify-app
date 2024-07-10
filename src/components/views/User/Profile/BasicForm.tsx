import { FormProvider, useForm } from 'react-hook-form'
import { profileSchema } from 'src/schemas/profile.schema'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/ui/form'
import { Input } from '@components/ui/input'
import { useYupValidationResolver } from '@hooks/useYupValidationResolver'

const BasicForm = () => {
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
  )
}

export { BasicForm }
