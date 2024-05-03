import { api } from '@/lib/axios'

export interface ApproveOrderParamsProps {
  orderId: string
}

export async function approveOrder({ orderId }: ApproveOrderParamsProps) {
  await api.patch(`/orders/${orderId}/approve`)
}
