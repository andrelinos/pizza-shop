import { api } from '@/lib/axios'

export interface GetOrderQueryProps {
  pageIndex: number | null
}

export interface OrdersProps {
  orderId: string
  createdAt: string
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  customerName: string
  total: number
}

export interface GetOrdersResponseProps {
  orders: OrdersProps[]

  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders({ pageIndex }: GetOrderQueryProps) {
  const response = await api.get<GetOrdersResponseProps>('/orders', {
    params: {
      pageIndex,
    },
  })

  return response.data
}
