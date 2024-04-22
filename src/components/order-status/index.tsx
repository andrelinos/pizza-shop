import { cn } from '@/lib/utils'

export type OrderStatusTypes =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStatusProps {
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

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center justify-end gap-2">
      <span
        className={cn(`h-2 w-2 rounded-full ${orderStatusColorMap[status]}`)}
      />
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
