import { api } from '@/lib/axios'

export interface GetOrderQueryProps {
  pageIndex: number | null
  orderId: string | null
  customerName: string | null
  status: string | null
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

export async function getOrders({
  pageIndex,
  orderId,
  customerName,
  status,
}: GetOrderQueryProps) {
  const response = await api.get<GetOrdersResponseProps>('/orders', {
    params: {
      pageIndex,
      orderId: orderId || null,
      customerName: customerName || null,
      status: status === 'all' ? null : status,
    },
  })

  return response.data
}
