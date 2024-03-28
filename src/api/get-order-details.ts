import { api } from '@/lib/axios'

export interface GetOrderDetailsParamsProps {
  orderId: string
}

export interface GetOrderDetailsResponseProps {
  id: string
  createdAt: string
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

export async function getOrderDetails({ orderId }: GetOrderDetailsParamsProps) {
  const response = await api.get<GetOrderDetailsResponseProps>(
    `/orders/${orderId}`,
  )

  return response.data
}
