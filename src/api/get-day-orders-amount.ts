import { api } from '@/lib/axios'

export interface GetDayOrdersAmountResponseProps {
  amount: number
  diffFromYesterday: number
}

export async function getDayOrdersAmount() {
  const response = await api.get<GetDayOrdersAmountResponseProps>(
    '/metrics/day-orders-amount',
  )

  return response.data
}
