import { Welcome } from '@components/containers/Welcome'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Welcome />
    </main>
  )
}

export default Home
