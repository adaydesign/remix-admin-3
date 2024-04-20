import { useState } from "react"
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  Text,
  UnstyledButton,
  rem,
} from "@mantine/core"
import { IconCalendarStats, IconChevronRight } from "@tabler/icons-react"
import classes from "./NavbarLinksGroup.module.css"
import { Link } from "@remix-run/react"

interface LinksGroupProps {
  icon: React.FC<any>
  label: string
  initiallyOpened?: boolean
  links?: { label: string; to: string }[]
  to?: string
}

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  links,
  to
}: LinksGroupProps) {
  const hasLinks = Array.isArray(links)
  const [opened, setOpened] = useState(initiallyOpened || false)

  const items = (hasLinks ? links : []).map((link) => (
    <Link to={link.to} className={classes.link}  key={link.label}>
      <Text>
        {link.label}
      </Text>
    </Link>
  ))

  if(to) {
    return (
      <Link to={to} className={classes.control}>
        <UnstyledButton
          
        >
          <Group justify="space-between" gap={0}>
            <Box style={{ display: "flex", alignItems: "center" }}>
              <ThemeIcon variant="light" size={30}>
                <Icon style={{ width: rem(18), height: rem(18) }} />
              </ThemeIcon>
              <Box ml="md">{label}</Box>
            </Box>
           
          </Group>
        </UnstyledButton>
        </Link>
    )
  }

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
      >
        <Group justify="space-between" gap={0}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <ThemeIcon variant="light" size={30}>
              <Icon style={{ width: rem(18), height: rem(18) }} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? "rotate(-90deg)" : "none",
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  )
}
