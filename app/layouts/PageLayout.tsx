import { Flex, Paper, useMantineTheme } from "@mantine/core"
import { useResizeObserver, useWindowScroll } from "@mantine/hooks"
import { BreadcrumbPanel, SubMenuPanel } from "~/components/layouts"

interface PageLayoutProps {
  children: React.ReactNode
}
const PageLayout = ({ children }: PageLayoutProps) => {
  const theme = useMantineTheme()
  const [ref, rect] = useResizeObserver();
  const [scroll] = useWindowScroll();

  return (
    <Flex direction="column" w="100%" ref={ref}>
      <Flex
        justify="space-between"
        align="center"
        p={theme.spacing.xs}
        px={theme.spacing.md}
        visibleFrom="sm"
        pos="fixed"
        w="100vw"
        maw={rect.width}
        bg={scroll.y > 0 ? theme.colors.primaryAlpha[2] : "transparent"}
      >
        <SubMenuPanel />
        <BreadcrumbPanel />
      </Flex>
      <Paper shadow="md" p="xl" m="md" mih="85vh" mt="53px">
        {children}
      </Paper>
    </Flex>
  )

}

export default PageLayout
