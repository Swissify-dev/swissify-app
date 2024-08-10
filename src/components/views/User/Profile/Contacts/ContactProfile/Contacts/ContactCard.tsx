import { Badge } from '@components/ui/badge'
import { lazy } from 'react'
import { Avatar } from '@components/ui/avatar'
const Options = lazy(() => import('./Options'))

const ContactCard = () => {
  return (
    <div className='gray-card flex-row items-center flex justify-between'>
      <div className='flex flex-row items-center gap-4'>
        <Avatar className='h-12 w-12 bg-primary rounded-full' />
        <div>
          <h1>Maria Hernandez</h1>
          <h2>Por Rick Waltz</h2>
          <Badge className='text-[10px] rounded-full'>Off Call</Badge>
        </div>
      </div>
      <Options />
    </div>
  )
}

export default ContactCard
