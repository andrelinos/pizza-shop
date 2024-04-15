import { api } from '@/lib/axios'

export interface GetMonthRevenueResponseProps {
  revenue: number
  diffFromLastMonth: number
}

export async function getMonthRevenue() {
  const response = await api.get<GetMonthRevenueResponseProps>(
    '/metrics/month-revenue',
  )

  return response.data
}
