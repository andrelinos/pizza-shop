import { api } from '@/lib/axios'

export interface GetMonthOrdersAmountResponseProps {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthOrdersAmount() {
  const response = await api.get<GetMonthOrdersAmountResponseProps>(
    '/metrics/month-orders-amount',
  )

  return response.data
}
