import React from 'react'
import { TanStackProvider } from './TankStackProvider'

const Providers = ({ children }: React.PropsWithChildren) => {
  return <TanStackProvider>{children}</TanStackProvider>
}

export { Providers }
