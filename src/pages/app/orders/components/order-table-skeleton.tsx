import { Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '@/components/ui/table'

export function OrderTableSkeleton() {
  return Array.from({ length: 10 }).map((_, i) => {
    return (
      <TableRow key={i}>
        <TableCell className="w-[64px]">
          <Button disabled variant="outline" size="xs">
            <Search className="h-3 w-3" />
            <span className="sr-only">Detalhes do pedido</span>
          </Button>
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[170px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[80px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[92px]" />
        </TableCell>
        <TableCell className="w-full">
          <Skeleton className="h-4 w-full" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[140px]" />
        </TableCell>
        <TableCell colSpan={2}>
          <div className="flex gap-9">
            <Skeleton className="h-4 w-[92px]" />

            <Skeleton className="h-4 w-[92px]" />
          </div>
        </TableCell>
      </TableRow>
    )
  })
}
