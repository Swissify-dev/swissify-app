import { Button } from '@components/ui/button'
import { PlusIcon } from '@radix-ui/react-icons'
import React from 'react'

interface HeaderProps {
  text: string
}

const Header = ({ text }: HeaderProps) => {
  return (
    <header className='flex justify-between items-center w-full'>
      <h1>{text}</h1>
      <Button variant='green'>
        <PlusIcon />
      </Button>
    </header>
  )
}

export default Header
