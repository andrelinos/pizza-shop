import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParamsProps,
  GetOrderDetailsResponseProps,
} from '../get-order-details'
import { orders } from './get-orders.mock'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParamsProps,
  never,
  GetOrderDetailsResponseProps
>('/orders/:orderId', ({ params }) => {
  const orderItem = orders.find((order) => order.orderId === params.orderId)

  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: orderItem?.customerName || '',
      email: 'johndoe@example.com',
      phone: '99999999999',
    },
    status: orderItem?.status || 'processing',
    createdAt: new Date().toISOString(),
    totalInCents: orderItem?.total || 0,
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
