import { Paper } from "@mantine/core"
import { IconHome2 } from "@tabler/icons-react"
import { ErrorTitle } from "~/components/layouts"
import { PageLayout } from "~/layouts"

export const handle = {
  breadcrumb: {
    title: "Welcome",
    to: "/",
    icon: IconHome2
  },
}

const NoDefinePage = ()=> {
  return (
    <PageLayout>
        <ErrorTitle code="404" title="Page Not Found" message="Cound not find this page."/>
    </PageLayout>
  )
}

export default NoDefinePage