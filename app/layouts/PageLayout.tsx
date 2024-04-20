import { Flex, Paper, useMantineTheme } from "@mantine/core"
import { BreadcrumbPanel, SubMenuPanel } from "~/components/layouts"

interface PageLayoutProps {
  children: React.ReactNode
}
const PageLayout = ({ children }: PageLayoutProps) => {
  const theme = useMantineTheme()
  
  return (
    <Flex direction="column" w="100%" bg="yellow">
      <Flex
        justify="space-between"
        p={theme.spacing.xs}
        visibleFrom="sm"
        bg="red"
        style={{position: 'fixed', top: "60px", zIndex: 99}}
      >
        <SubMenuPanel />
        <BreadcrumbPanel />
      </Flex>
      <Paper shadow="md" p="xl" m="md" mih="90vh" mt="56px">
        {children}
      </Paper>
    </Flex>
  )
}

export default PageLayout
