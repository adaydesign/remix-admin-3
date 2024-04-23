import { Title, useMantineTheme } from "@mantine/core"
import { ForcastTable, OutlookForm } from "~/components/news"
import { PageLayout } from "~/layouts"
export const handle = {
  breadcrumb: {
    title: "Outlook",
    to: "/news/outlook",
  },
}

const OutlookPage = () => {
  const theme = useMantineTheme()

  return (
    <PageLayout>
      <Title order={4} mb={theme.spacing.md}>
        News.outlook
      </Title>
      <OutlookForm />
    </PageLayout>
  )
}

export default OutlookPage
