import { Skeleton } from "@/components/ui/skeleton"
import { Header } from "@/components/header"

export default function DashboardLoading() {
  return (
    <div>
      <Header heading="Dashboard" text="TODO-INIT">
        <div className="flex flex-row-reverse justify-start gap-2 sm:flex-row sm:justify-end">
          <Skeleton className="h-4 w-4 rounded-full" />
        </div>
      </Header>
      <div className="divide-border-200 divide-y rounded-md border">
        {
          //TODO-INIT: Add your skeletons here.
        }
      </div>
    </div>
  )
}
