import { api } from '@/lib/axios'

export type GetPopularProductsResponseProps = {
  product: string
  amount: number
}[]

export async function getPopularProducts() {
  const response = await api.get<GetPopularProductsResponseProps>(
    '/metrics/popular-products',
  )

  return response.data
}
