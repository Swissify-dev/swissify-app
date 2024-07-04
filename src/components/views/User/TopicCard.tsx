import React from 'react'
import { UserCard } from './UserCard'

interface TopicCardProps {
  title: string
  users: { name: string }[]
  children?: React.ReactNode
}

const TopicCard = ({ title, users, children }: TopicCardProps) => {
  return (
    <div className='flex-col max-w-96 w-full rounded-md items-center flex p-4 border-solid border border-slate-200'>
      {children}
      <h2 className='font-bold text-lg mr-auto mb-2'>{title}</h2>
      <>
        {users.map((user, index) => (
          <UserCard
            key={index}
            user={user}
          />
        ))}
      </>
    </div>
  )
}

export default TopicCard
