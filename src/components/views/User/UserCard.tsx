import { Badge } from '@components/ui/badge'
import React from 'react'

interface UserCardProps {
  user: {
    name: string
  }
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className='flex w-full items-center gap-4 justify-start'>
      <Badge className='h-12 w-12 rounded-full' />
      <p className='font-semibold'>{user.name}</p>
    </div>
  )
}

export { UserCard }
