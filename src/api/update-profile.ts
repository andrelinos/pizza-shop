import { api } from '@/lib/axios'

export interface UpdateProfileBodyProps {
  name: string
  description: string | null
}

export async function updateProfile({
  name,
  description,
}: UpdateProfileBodyProps) {
  await api.put('/profile', { name, description })
}
