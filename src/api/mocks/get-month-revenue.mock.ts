import { http, HttpResponse } from 'msw'

import { GetMonthRevenueResponseProps } from '../get-month-revenue'

export const getMonthRevenueMock = http.get<
  never,
  never,
  GetMonthRevenueResponseProps
>('/metrics/month-revenue', () => {
  return HttpResponse.json({
    revenue: 20000,
    diffFromLastMonth: 10,
  })
})
