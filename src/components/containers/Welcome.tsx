'use client'
import React, { FC } from 'react'
import { useMutation } from '@tanstack/react-query'
import { hello as helloFn } from 'src/services/hello'
import { Button } from '../ui/button'
import { AxiosError } from 'axios'
import { useAppConfig } from 'src/store/app-config'

const Welcome: FC = () => {
  const setLanguage = useAppConfig((state) => state.setLanguage)
  const {
    data,
    error,
    isPending,
    mutate: mutateSendHello,
  } = useMutation({
    mutationFn: helloFn,
    onSuccess: (data) => {
      setLanguage(data.ln)
    },
  })
  return (
    <div>
      <p>
        {isPending
          ? 'Cargando saludo...'
          : error instanceof AxiosError
          ? 'No hay saludo:('
          : data?.saludo}
      </p>
      <Button disabled={isPending} onClick={() => mutateSendHello()}>
        Click
      </Button>
    </div>
  )
}

export { Welcome }
