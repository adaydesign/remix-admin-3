import { Anchor, Box, Flex, Text, ThemeIcon, useMantineTheme } from "@mantine/core"
import { Link } from "@remix-run/react"
import React from "react"

type BreadcrumbItem = {
  title: string
  to: string
  icon?: React.ElementType
}

interface BreadcrumbLinkProps {
  item: BreadcrumbItem
}
const BreadcrumbLink = ({ item }: BreadcrumbLinkProps) => {
  const theme = useMantineTheme()
  const Icon = item.icon as React.ElementType
  return (
    <Link to={item.to} style={{ textDecoration: "none" }}>
      <Flex>
        {item.icon && (
          <ThemeIcon size="sm" mr={theme.spacing.xs}>
            <Icon stroke={1.5} />
          </ThemeIcon>
        )}
        <Text>{item.title}</Text>
      </Flex>
    </Link>
  )
}

export default BreadcrumbLink
