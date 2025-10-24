import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "./card"

export function TaskCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-7 w-3/4" />
      </CardHeader>
      <CardContent className="space-y-6">
        <Skeleton className="h-5 w-full" />
      </CardContent>
      <CardFooter className="flex justify-end">
        <Skeleton className="h-9 w-17 rounded-md" />
      </CardFooter>
    </Card>
  )
}