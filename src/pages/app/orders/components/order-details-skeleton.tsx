import { Skeleton } from '@/components/ui/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function OrderDetailsSkeleton() {
  return (
    <>
      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell>
                <Skeleton className="ml-auto h-4 w-20" />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="text-right font-mono uppercase">
                <Skeleton className="ml-auto h-4 w-[164px]" />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell>
                <Skeleton className="ml-auto h-4 w-[140px]" />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell>
                <Skeleton className="ml-auto h-4 w-[200px]" />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Realizado</TableCell>
              <TableCell>
                <Skeleton className="ml-auto h-4 w-[148px]" />
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
            {Array.from({ length: 2 }).map((_, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>
                    <Skeleton className="h-4 w-[140px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="ml-auto h-4 w-6" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="ml-auto h-4 w-12" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="ml-auto h-4 w-12" />
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
                <Skeleton className="h-4 w-20" />
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </>
  )
}
