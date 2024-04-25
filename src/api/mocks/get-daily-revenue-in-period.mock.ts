import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponseProps } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponseProps
>('/metrics/daily-revenue-in-period', () => {
  return HttpResponse.json([
    { date: '01/01/2024', revenue: 2000 },
    { date: '02/01/2024', revenue: 801 },
    { date: '03/01/2024', revenue: 2000 },
    { date: '04/01/2024', revenue: 585 },
    { date: '05/01/2024', revenue: 2850 },
    { date: '06/01/2024', revenue: 1800 },
    { date: '07/01/2024', revenue: 5000 },
  ])
})
