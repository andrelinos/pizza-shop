import { api } from '@/lib/axios'

export interface DeliverOrderParamsProps {
  orderId: string
}

export async function deliverOrder({ orderId }: DeliverOrderParamsProps) {
  await api.patch(`/orders/${orderId}/deliver`)
}
