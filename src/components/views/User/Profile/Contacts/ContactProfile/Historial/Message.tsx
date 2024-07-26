import React from 'react'
import Details from './Details'

const Message = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Details />
      <div className='rounded-md bg-secondary-gray p-4'>
        <p>Nota:</p>
        <br />
        <p>
          Es cliente y le interesa el comal, mamá esta muy interesada en los
          productos también. Premio 3 pcs, $300{' '}
        </p>
      </div>
    </div>
  )
}

export default Message
