import { apiClient } from '@config/axios'
import { HelloResponse } from './types'

async function hello(): Promise<HelloResponse> {
  const response = apiClient.post('hello')
  const data = (await response).data
  return data
}

export { hello }
