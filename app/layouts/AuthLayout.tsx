import { AppShell, Burger, Group, ScrollArea } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import {
  AppVersionLabel,
  HeaderSearch,
  NavbarNested,
  UserButton,
} from "~/components/layouts"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const [opened, { toggle }] = useDisclosure()

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 280,
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: opened},
      }} 
    >
      <AppShell.Header>
        <HeaderSearch opened={opened} toggle={toggle}/>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <AppShell.Section>
          <UserButton />
        </AppShell.Section>
        <AppShell.Section grow component={ScrollArea}>
          <NavbarNested />
        </AppShell.Section>
        <AppShell.Section>
          <AppVersionLabel />
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main bg="gray.0">{children}</AppShell.Main>
    </AppShell>
  )
}

export default AuthLayout
