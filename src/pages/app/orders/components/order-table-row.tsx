import { useMutation } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ArrowRight, Search, X } from 'lucide-react'

import { approveOrder } from '@/api/approve-order'
import { cancelOrder } from '@/api/cancel-order'
import { deliverOrder } from '@/api/deliver-order'
import { dispatchOrder } from '@/api/displatch-order'
import { GetOrdersResponseProps, OrdersProps } from '@/api/get-orders'
import { OrderStatus, OrderStatusTypes } from '@/components/order-status'
import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import { queryClient } from '@/lib/react-query'

import { OrderDetails } from './order-details'

interface OrderTableProps {
  order: OrdersProps
}

export function OrderTableRow({ order }: OrderTableProps) {
  function stringToNumber(str: string) {
    let result = 0
    for (let i = 0; i < str.length; i++) {
      result += str.charCodeAt(i)
    }
    return result
  }

  const orderId = order.orderId

  const orderNumber = stringToNumber(orderId)

  function updateOrderStatusCache(orderId: string, status: OrderStatusTypes) {
    const orderListCache = queryClient.getQueriesData<GetOrdersResponseProps>({
      queryKey: ['orders'],
    })

    orderListCache.forEach(([cacheKey, cacheData]) => {
      if (!cacheData) {
        return
      }

      queryClient.setQueryData<GetOrdersResponseProps>(cacheKey, {
        ...cacheData,
        orders: cacheData.orders.map((order) => {
          if (order.orderId === orderId) {
            return { ...order, status }
          }
          return order
        }),
      })
    })
  }

  const { mutateAsync: cancelOrderFn, isPending: isCancelingOrder } =
    useMutation({
      mutationFn: cancelOrder,

      async onSuccess(_, { orderId }) {
        updateOrderStatusCache(orderId, 'canceled')
      },
    })

  const { mutateAsync: approveOrderFn, isPending: isApprovingOrder } =
    useMutation({
      mutationFn: approveOrder,

      async onSuccess(_, { orderId }) {
        updateOrderStatusCache(orderId, 'processing')
      },
    })

  const { mutateAsync: dispatchOrderFn, isPending: isDispatchingOrder } =
    useMutation({
      mutationFn: dispatchOrder,

      async onSuccess(_, { orderId }) {
        updateOrderStatusCache(orderId, 'delivering')
      },
    })

  const { mutateAsync: deliverOrderFn, isPending: isDeliveringOrder } =
    useMutation({
      mutationFn: deliverOrder,

      async onSuccess(_, { orderId }) {
        updateOrderStatusCache(orderId, 'delivered')
      },
    })

  const cancelButtonIsDisabled = !['pending', 'processing']?.includes(
    order?.status,
  )

  return (
    <TableRow>
      <TableCell>
        <OrderDetails orderId={orderId}>
          <Button variant="outline" size="xs" title="Detalhes do pedido">
            <Search className="h-3 w-3" />
            <span className="sr-only">Detalhes do pedido</span>
          </Button>
        </OrderDetails>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">{orderId}</TableCell>
      <TableCell className="text-muted-foreground">
        {formatDistanceToNow(order.createdAt, {
          locale: ptBR,
          addSuffix: true,
        })}
      </TableCell>
      <TableCell>
        <OrderStatus status={order.status} />
      </TableCell>
      <TableCell className="font-medium">{order.customerName}</TableCell>
      <TableCell className="font-medium">
        {(order.total / 100).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </TableCell>
      <TableCell className="w-28 px-0">
        {order.status === 'pending' && (
          <Button
            variant="outline"
            size="xs"
            onClick={() => approveOrderFn({ orderId: order.orderId })}
          >
            <ArrowRight className="mr-2 h-3 w-3" />
            Aprovar
          </Button>
        )}

        {order.status === 'processing' && (
          <Button
            variant="outline"
            size="xs"
            disabled={isDispatchingOrder}
            onClick={() => dispatchOrderFn({ orderId: order.orderId })}
          >
            <ArrowRight className="mr-2 h-3 w-3" />
            Enviado
          </Button>
        )}

        {order.status === 'delivering' && (
          <Button
            variant="outline"
            size="xs"
            disabled={isDeliveringOrder}
            onClick={() => deliverOrderFn({ orderId: order.orderId })}
          >
            <ArrowRight className="mr-2 h-3 w-3" />
            Entregue
          </Button>
        )}
      </TableCell>

      <TableCell className="w-28 px-0">
        <Button
          variant="ghost"
          size="xs"
          disabled={cancelButtonIsDisabled || isCancelingOrder}
          onClick={() => cancelOrderFn({ orderId: order.orderId })}
        >
          <X className="mr-2 h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
