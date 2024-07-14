import { Card } from '@components/ui/card'
import Image from 'next/image'

const MainProfileFiles = () => {
  return (
    <Card>
      <h3 className='font-bold text-lg'>Archivos</h3>
      <p>
        Información cargada para ser procesada por la inteligencia artificial.
      </p>
      <div className='flex flex-col gap-5'>
        <div className='flex items-center text-primary-gray'>
          <Image
            src='/icons/pdf.png'
            alt='Icono de PDF'
            width={40}
            height={40}
          />
          <span>Financiaciones del banco asociado</span>
        </div>
        <div className='flex items-center text-primary-gray'>
          <Image
            src='/icons/pdf.png'
            alt='Icono de PDF'
            width={40}
            height={40}
          />
          <span>2017-Contactos Importados</span>
        </div>
        <div className='flex items-center text-primary-gray'>
          <Image
            src='/icons/pdf.png'
            alt='Icono de PDF'
            width={40}
            height={40}
          />
          <span>2018-Contactos Importados</span>
        </div>
      </div>
    </Card>
  )
}

export default MainProfileFiles
