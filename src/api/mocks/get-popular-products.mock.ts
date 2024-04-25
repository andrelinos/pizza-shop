import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponseProps } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponseProps
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza 01', amount: 5 },
    { product: 'Pizza 02', amount: 4 },
    { product: 'Pizza 03', amount: 3 },
    { product: 'Pizza 04', amount: 6 },
    { product: 'Pizza 05', amount: 7 },
  ])
})
