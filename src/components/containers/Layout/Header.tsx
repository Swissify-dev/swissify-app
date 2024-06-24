import { Button } from '@components/ui/button'
import { PlusCircledIcon } from '@radix-ui/react-icons'
import React from 'react'

interface HeaderProps {
  text: string
}

const Header = ({ text }: HeaderProps) => {
  return (
    <header className='px-8 pt-8 flex justify-between items-center w-full'>
      <h1 className='font-bold text-2xl'>{text}</h1>
      <Button variant='green' className='p-0'>
        <PlusCircledIcon className='w-12 h-12' />
      </Button>
    </header>
  )
}

export default Header
