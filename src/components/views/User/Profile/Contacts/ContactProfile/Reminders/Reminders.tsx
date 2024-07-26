import React from 'react'

const Reminders = () => {
  return (
    <div className='card'>
      <h2 className='font-bold text-lg mr-auto mb-2'>Recordatorios</h2>
      <div className='flex flex-col gap-5 mt-6'>
        <p>
          Todos los recordatorios son asignados a la agenda personal de forma
          automática
        </p>
        <ul>
          <li>Post venta - Maria Gutierrez por Ricky Waltz 6/03/24</li>
          <li>Obsequio - Maria Gutierrez por Ricky Waltz 7/12/24</li>
          <li>Ofertar - Maria Gutierrez por Ricky Waltz 11/25/24</li>
        </ul>
      </div>
    </div>
  )
}

export default Reminders
