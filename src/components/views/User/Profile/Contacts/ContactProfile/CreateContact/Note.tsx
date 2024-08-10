import React from 'react'

const Note = () => {
  return (
    <div className='card'>
      <h1 className='mb-4 font-bold'>
        Nota: <br />
      </h1>
      <ul className='list-disc ml-6 text-sm'>
        <li>8.5</li>
        <li>Trabaja de 7 a 7</li>
        <li>Llevar demsotración de sartén</li>
      </ul>
    </div>
  )
}

export { Note }
