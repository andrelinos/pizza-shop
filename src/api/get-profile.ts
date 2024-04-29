import { api } from '@/lib/axios'

export interface GetProfileResponseProps {
  phone: string | null
  email: string
  id: string
  name: string
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getProfile() {
  const response = await api.get<GetProfileResponseProps>('/me')

  return response.data
}
