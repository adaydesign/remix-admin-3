import { Title, useMantineTheme } from "@mantine/core"
import React from "react"
import { theme } from "~/constants/app.theme"
import { PageLayout } from "~/layouts"
export const handle = {
  breadcrumb: {
    title: "Overviews",
    to: "/news/overview",
  },
  submenu: [
    { link: '/about', label: 'Features' },
    {
      link: '#1',
      label: 'Learn',
      links: [
        { link: '/docs', label: 'Documentation' },
        { link: '/resources', label: 'Resources' },
        { link: '/community', label: 'Community' },
        { link: '/blog', label: 'Blog' },
      ],
    },
  ]
}

const OverViewPage = () => {
  const theme = useMantineTheme()

  return (
    <PageLayout>
      <Title order={4} mb={theme.spacing.md}>
        News.overviews
      </Title>
    </PageLayout>
  )
}

export default OverViewPage
