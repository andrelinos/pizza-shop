import { useQuery } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ReactNode, useState } from 'react'

import { getOrderDetails } from '@/api/get-order-details'
import { OrderStatus } from '@/components/order-status'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export interface OrderDetailsProps {
  children: ReactNode
  orderId: string
}

export function OrderDetails({ children, orderId }: OrderDetailsProps) {
  const [onOpen, setOnOpen] = useState(false)

  const { data: order } = useQuery({
    queryKey: ['order', orderId],
    queryFn: () => getOrderDetails({ orderId }),
    enabled: onOpen,
  })

  return (
    <Dialog open={onOpen} onOpenChange={setOnOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Pedido: {orderId}</DialogTitle>
          <DialogDescription>Detalhes do pedido</DialogDescription>
        </DialogHeader>

        {order && (
          <div className="space-y-6">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="text-muted-foreground">
                    Status
                  </TableCell>
                  <TableCell className="flex justify-end">
                    <OrderStatus status={order?.status || 'pending'} />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="text-muted-foreground">
                    Cliente
                  </TableCell>
                  <TableCell className="flex justify-end font-mono uppercase">
                    {order?.customer.name}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="text-muted-foreground">
                    Telefone
                  </TableCell>
                  <TableCell className="flex justify-end">
                    {order?.customer.phone || 'Não informado'}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="text-muted-foreground">
                    E-mail
                  </TableCell>
                  <TableCell className="flex justify-end">
                    {order?.customer.email.toLowerCase()}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="text-muted-foreground">
                    Realizado
                  </TableCell>
                  <TableCell className="flex justify-end">
                    {order?.createdAt &&
                      formatDistanceToNow(order?.createdAt, {
                        locale: ptBR,
                        addSuffix: true,
                      })}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Produto</TableHead>
                  <TableHead className="text-right">Qtd.</TableHead>
                  <TableHead className="text-right">Preço</TableHead>
                  <TableHead className="text-right">SubTotal</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {order.orderItems.map((orderItem) => {
                  return (
                    <TableRow key={orderItem.id}>
                      <TableCell>{orderItem.product.name}</TableCell>
                      <TableCell className="text-right">
                        {orderItem.quantity}
                      </TableCell>
                      <TableCell className="text-right">
                        {(orderItem.priceInCents / 100).toLocaleString(
                          'pb-BR',
                          {
                            style: 'currency',
                            currency: 'BRL',
                          },
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        {(
                          (orderItem.quantity * orderItem.priceInCents) /
                          100
                        ).toLocaleString('pb-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
              <TableFooter>
                <TableRow className="font-semibold">
                  <TableCell colSpan={3} className="uppercase">
                    Total do pedido
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    {(order.totalInCents / 100).toLocaleString('pb-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
