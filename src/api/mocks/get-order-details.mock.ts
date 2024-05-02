import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParamsProps,
  GetOrderDetailsResponseProps,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParamsProps,
  never,
  GetOrderDetailsResponseProps
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '99999999999',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 5000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: { name: 'Pizza Pepperoni' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 4000,
        product: { name: 'Pizza Margherita' },
        quantity: 2,
      },
    ],
  })
})
