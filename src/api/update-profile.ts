import { api } from '@/lib/axios'

interface UpdateProfileBodyProps {
  name: string
  description: string | null
}

export async function updateProfile({
  name,
  description,
}: UpdateProfileBodyProps) {
  await api.put('/profile', { name, description })
}
