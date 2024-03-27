type OrderStatusTypes =
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
  processing: 'bg-emerald-500',
  delivering: 'bg-emerald-500',
  delivered: 'bg-emerald-500',
  canceled: 'bg-rose-500',
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${orderStatusColorMap[status]}`} />
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
