import { DashboardShell } from "@/components/dashboard-shell"
import { Header } from "@/components/header"
import { PostCreateButton } from "@/components/post-create-button"

export default function DashboardLoading() {
  return (
    <DashboardShell>
      <Header heading="Posts" text="Create and manage posts.">
        <PostCreateButton />
      </Header>
      <div className="divide-border-200 divide-y rounded-md border">
        {/* TODO-INIT: implement skeleton loading */}
      </div>
    </DashboardShell>
  )
}
