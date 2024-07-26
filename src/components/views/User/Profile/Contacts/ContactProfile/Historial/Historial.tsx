import React from 'react'
import Message from './Message'
import { Button } from '@components/ui/button'

const Historial = () => {
  return (
    <div className='card'>
      <h2 className='font-bold text-lg mr-auto mb-2'>Historial</h2>
      <Message />
      <div className='w-full flex items-center justify-center mt-4'>
        <Button variant='ghost'>Ver todos</Button>
      </div>
    </div>
  )
}

export default Historial
