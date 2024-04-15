import { api } from '@/lib/axios'

export interface GetMonthCanceledOrdersAmountResponseProps {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthCanceledOrdersAmount() {
  const response = await api.get<GetMonthCanceledOrdersAmountResponseProps>(
    '/metrics/month-canceled-orders-amount',
  )

  return response.data
}
