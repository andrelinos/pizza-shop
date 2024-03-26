import { api } from '@/lib/axios'

export interface SignInBodyProps {
  email: string
}

export async function signIn({ email }: SignInBodyProps) {
  await api.post('/authenticate', { email })
}
