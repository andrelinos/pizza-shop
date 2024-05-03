import { api } from '@/lib/axios'

export interface DispatchOrderParamsProps {
  orderId: string
}

export async function dispatchOrder({ orderId }: DispatchOrderParamsProps) {
  await api.patch(`/orders/${orderId}/dispatch`)
}
