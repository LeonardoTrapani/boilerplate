import { notFound } from "next/navigation"
import { signOut } from "next-auth/react"

import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { Header } from "@/components/header"
import { UserDropdown } from "@/components/user-dropdown"

export default async function DashboardPage() {
  const sessionUser = await getCurrentUser()

  if (!sessionUser) {
    signOut()
    return notFound()
  }

  const user = await db.user.findUnique({
    where: {
      id: sessionUser.id,
    },
  })

  if (!user || !user.resume) {
    signOut()
    return notFound()
  }

  return (
    <div className="min-h-[80vh]">
      <Header heading="Dashboard" text="TODO-INIT: Add a description here.">
        <div className="flex flex-row-reverse justify-start gap-2 sm:flex-row sm:justify-end">
          <UserDropdown user={user} />
        </div>
      </Header>
      {
        //TODO-INIT: Add your content here.
      }
    </div>
  )
}
