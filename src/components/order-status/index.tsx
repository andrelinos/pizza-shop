import { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

export type OrderStatusTypes =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStatusProps extends HTMLAttributes<HTMLDivElement> {
  status: OrderStatusTypes
}

const orderStatusMap: Record<OrderStatusTypes, string> = {
  pending: 'Pendente',
  processing: 'Preparando',
  delivering: 'Enviado',
  delivered: 'Entregue',
  canceled: 'Cancelado',
}

const orderStatusColorMap: Record<OrderStatusTypes, string> = {
  pending: 'bg-slate-400',
  processing: 'bg-blue-500',
  delivering: 'bg-amber-500',
  delivered: 'bg-emerald-500',
  canceled: 'bg-rose-500',
}

export function OrderStatus({ status, className, ...rest }: OrderStatusProps) {
  return (
    <div className={cn('flex items-center gap-2', className)} {...rest}>
      <span
        data-testid="badge"
        className={cn(`h-2 w-2 rounded-full ${orderStatusColorMap[status]}`)}
      />
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
