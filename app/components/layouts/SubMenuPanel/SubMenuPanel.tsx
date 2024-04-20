import { Menu, Center, Group, Flex } from "@mantine/core"
import { useLocation, useMatches } from "@remix-run/react"
import { IconChevronDown } from "@tabler/icons-react"
import { useMemo } from "react"
import classes from "./SubMenuPanel.module.css"

const SubMenuPanel = () => {
  const { pathname } = useLocation()
  const matches = useMatches()
  const match: any = matches.filter(
    (match: any) =>
      match.pathname == pathname && match.handle && match.handle.submenu
  )

  if (match?.length > 0) {
    const submenu = match[0].handle.submenu
    const items = useMemo(() => {
      return submenu.map((link: any) => {
        const menuItems = link.links?.map((item: any) => (
          <Menu.Item key={item.link}>{item.label}</Menu.Item>
        ))

        if (menuItems) {
          return (
            <Menu
              key={link.label}
              trigger="hover"
              transitionProps={{ exitDuration: 0 }}
              withinPortal
            >
              <Menu.Target>
                <a
                  href={link.link}
                  className={classes.link}
                  onClick={(event) => event.preventDefault()}
                >
                  <Center>
                    <span className={classes.linkLabel}>{link.label}</span>
                    <IconChevronDown size="0.9rem" stroke={1.5} />
                  </Center>
                </a>
              </Menu.Target>
              <Menu.Dropdown>{menuItems}</Menu.Dropdown>
            </Menu>
          )
        }

        return (
          <a
            key={link.label}
            href={link.link}
            className={classes.link}
            onClick={(event) => event.preventDefault()}
          >
            {link.label}
          </a>
        )
      })
    }, [submenu])

    return <Flex>{items}</Flex>
  }
  return null
}

export default SubMenuPanel
