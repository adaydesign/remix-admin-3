import { Title, useMantineTheme } from "@mantine/core"
import { ForcastTable } from "~/components/news"
import { PageLayout } from "~/layouts"
export const handle = {
  breadcrumb: {
    title: "Forecasts",
    to: "/news/forecasts",
  },
}

const ForecastPage = () => {
  const theme = useMantineTheme()

  return (
    <PageLayout>
      <Title order={4} mb={theme.spacing.md}>
        News.forcast
      </Title>
      <ForcastTable />
    </PageLayout>
  )
}

export default ForecastPage
