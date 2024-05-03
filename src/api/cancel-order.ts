import { api } from '@/lib/axios'

export interface CancelOrderParamsProps {
  orderId: string
}

export async function cancelOrder({ orderId }: CancelOrderParamsProps) {
  await api.patch(`/orders/${orderId}/cancel`)
}
