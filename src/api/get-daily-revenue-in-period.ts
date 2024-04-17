import { api } from '@/lib/axios'

export interface getDailyRevenueInPeriodQueryProps {
  from?: Date
  to?: Date
}

export type GetDailyRevenueInPeriodResponseProps = {
  date: string
  revenue: number
}[]

export async function getDailyRevenueInPeriod({
  from,
  to,
}: getDailyRevenueInPeriodQueryProps) {
  const response = await api.get<GetDailyRevenueInPeriodResponseProps>(
    '/metrics/daily-revenue-in-period',
    {
      params: {
        from,
        to,
      },
    },
  )

  return response.data
}
