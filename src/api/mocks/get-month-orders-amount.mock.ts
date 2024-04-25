import { http, HttpResponse } from 'msw'

import { GetMonthOrdersAmountResponseProps } from '../get-month-orders-amount'

export const getMonthOrdersAmountMock = http.get<
  never,
  never,
  GetMonthOrdersAmountResponseProps
>('/metrics/month-orders-amount', () => {
  return HttpResponse.json({
    amount: 200,
    diffFromLastMonth: 7,
  })
})
