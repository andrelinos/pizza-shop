import { Helmet } from 'react-helmet-async'

import { Pagination } from '@/components/pagination'
import { Table, TableBody, TableHead, TableHeader } from '@/components/ui/table'

import { OrderTableFilters } from './components/order-table-filters'
import { OrderTableRow } from './components/order-table-row'

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight ">Pedidos</h1>

        <div className="space-y-2.5">
          <OrderTableFilters />

          <div className="rounded-r-md border">
            <Table>
              <TableHeader>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Identificador</TableHead>
                <TableHead className="w-[180px]">Realizado há</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead className="">Cliente</TableHead>
                <TableHead className="w-[140px]">Total do pedido</TableHead>
                <TableHead colSpan={2} className="pr-8 text-right">
                  Opções
                </TableHead>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_item, index) => (
                  <OrderTableRow key={index} />
                ))}
              </TableBody>
            </Table>
          </div>
          <Pagination pageIndex={1} perPage={5} totalCount={25} />
        </div>
      </div>
    </>
  )
}
