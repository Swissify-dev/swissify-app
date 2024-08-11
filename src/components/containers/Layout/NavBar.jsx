import { Button } from '@components/ui/button';
import { FaceIcon, PersonIcon, MixIcon, ChatBubbleIcon, CalendarIcon } from '@radix-ui/react-icons';
import React from 'react';

const mainNavItems = ['A', 'B', 'C'];

const NavBar = () => {
  return (
    <div className="bg-background fixed bottom-0 w-full shadow-lg flex items-center py-4 justify-evenly">
      <Button variant="solid" size="navIcon">
        <PersonIcon className='w-9 h-9' />
      </Button>
      <Button variant="solid" size="navIcon">
        <CalendarIcon className='w-9 h-9' />
      </Button>
      <Button variant="solid" size="navIcon">
        <ChatBubbleIcon className='w-9 h-9' />
      </Button>
      <Button variant="solid" size="navIcon">
        <MixIcon className='w-9 h-9' />
      </Button>
      <Button variant="solid" size="navIcon">
        <FaceIcon className='w-9 h-9' />
      </Button>
    </div>
  );
};

export default NavBar;