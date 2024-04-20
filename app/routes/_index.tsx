import { Paper } from "@mantine/core"
import { IconHome2 } from "@tabler/icons-react"
import { HeroBullets, Welcome } from "~/components/home"
import { PageLayout } from "~/layouts"

export const handle = {
  breadcrumb: {
    title: "Welcome",
    to: "/",
    icon: IconHome2
  },
}

export default function Index() {
  return (
    <PageLayout>
      <HeroBullets />
      <Welcome />
    </PageLayout>
  )
}
