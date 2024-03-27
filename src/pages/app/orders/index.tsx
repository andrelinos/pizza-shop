import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { getOrders } from '@/api/get-orders'
import { Pagination } from '@/components/pagination'
import { Table, TableBody, TableHead, TableHeader } from '@/components/ui/table'

import { OrderTableFilters } from './components/order-table-filters'
import { OrderTableRow } from './components/order-table-row'

export function Orders() {
  const [searchParams, setSearchParams] = useSearchParams()

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? '1')

  const { data: ordersData, isLoading: isLoadingOrders } = useQuery({
    queryKey: ['orders', pageIndex],
    queryFn: () => getOrders({ pageIndex }),
  })

  function handlePaginate(pageIndex: number) {
    setSearchParams((prev) => {
      prev.set('page', String(pageIndex + 1))

      return prev
    })
  }

  return (
    <>
      <Helmet title="Pedidos" />
      <div className="mb-8 flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight ">Pedidos</h1>

        <div className="space-y-2.5">
          <OrderTableFilters />

          <div className="rounded-r-md border">
            <Table>
              <TableHeader>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Núm. Pedido</TableHead>
                <TableHead className="w-[180px]">Realizado há</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead className="">Cliente</TableHead>
                <TableHead className="w-[140px]">Total do pedido</TableHead>
                <TableHead colSpan={2} className="pr-8 text-right">
                  Opções
                </TableHead>
              </TableHeader>
              <TableBody>
                {ordersData?.orders.map((order) => (
                  <OrderTableRow key={order.orderId} order={order} />
                ))}
              </TableBody>
            </Table>
          </div>
          {ordersData && (
            <Pagination
              onPageChange={handlePaginate}
              pageIndex={ordersData.meta.pageIndex}
              perPage={ordersData.meta.perPage}
              totalCount={ordersData.meta.totalCount}
            />
          )}
        </div>
      </div>
    </>
  )
}
