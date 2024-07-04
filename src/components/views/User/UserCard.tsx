import { Badge } from '@components/ui/badge'
import React from 'react'

const UserCard = () => {
  return (
    <div className='flex w-full items-center gap-4 justify-start'>
      <Badge className='h-12 w-12 rounded-full' />
      <p className='font-semibold'>Erick Jonson</p>
    </div>
  )
}

export { UserCard }
