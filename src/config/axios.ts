import axios, { AxiosInstance } from 'axios'

const api: string = process.env.NEXT_PUBLIC_API || 'http://localhost:3000/api'

export const apiClient: AxiosInstance = axios.create({
  baseURL: api,
  headers: {
    'Content-Type': 'application/json',
  },
})
