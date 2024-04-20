import { Title, useMantineTheme } from "@mantine/core"
import { IconDashboard } from "@tabler/icons-react"
import { StatsGrid, UsersRolesTable } from "~/components/dashboard"
import { PageLayout } from "~/layouts"


export const handle = {
  breadcrumb: {
      title: "Dashboard",
      to: "/dashboard",
      icon: IconDashboard
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
    { link: '/about', label: 'About' },
    { link: '/pricing', label: 'Pricing' },
    {
      link: '#2',
      label: 'Support',
      links: [
        { link: '/faq', label: 'FAQ' },
        { link: '/demo', label: 'Book a demo' },
        { link: '/forums', label: 'Forums' },
      ],
    },
  ]
}

function dashboard() {
  const theme = useMantineTheme()
  return (
    <PageLayout>
      <Title order={4} mb={theme.spacing.md}>
        Market Dashboard
      </Title>
      <StatsGrid />
      <Title order={4} mt={theme.spacing.xl} mb={theme.spacing.md}>
        Users Roles
      </Title>
      <UsersRolesTable />
    </PageLayout>
  )
}

export default dashboard
