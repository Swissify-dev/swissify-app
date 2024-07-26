import { Avatar } from '@components/ui/avatar'
import React from 'react'

const Details = () => {
  return (
    <div className='flex gap-2 items-center'>
      <Avatar className='rounded-full h-6 w-6' />
      <div>
        <h1>Maria Hernandez por Ricky Waltz</h1>
        <span>5/18/24 12:38pm</span>
      </div>
    </div>
  )
}

export default Details
