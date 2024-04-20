import {
  Autocomplete,
  Group,
  Burger,
  rem,
  ThemeIcon,
  UnstyledButton,
  Text,
  useMantineTheme,
  HoverCard,
  Anchor,
  Button,
  Divider,
  SimpleGrid,
  Badge,
  Flex,
  NavLink,
} from "@mantine/core"
import { useDisclosure, useHover } from "@mantine/hooks"
import {
  IconAppsFilled,
  IconBellFilled,
  IconBook,
  IconChartPie3,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconLayoutGridFilled,
  IconNotification,
  IconSearch,
} from "@tabler/icons-react"
import classes from "./HeaderSearch.module.css"
import UserMenu from "../UserMenu/UserMenu"
import { APP_FULL_NAME } from "~/constants/app.constants"
import { Link } from "@remix-run/react"

const links = [
  { link: "/guide", label: "Guide" },
  { link: "/community", label: "Community" },
]

const mockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
]

interface HeaderSearchProps {
  opened: boolean
  toggle: () => void
}
const HeaderSearch = ({ opened, toggle }: HeaderSearchProps) => {
  const theme = useMantineTheme()

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      <Text fw={500} size="sm" c="white">
        {link.label}
      </Text>
    </a>
  ))

  const hOverLinks = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon
            style={{ width: rem(22), height: rem(22) }}
            color={theme.primaryColor}
          />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ))

  return (
    <Flex
      justify="space-between"
      align="center"
      bg={theme.primaryColor}
      pl={theme.spacing.md}
      pr={theme.spacing.md}
      h="100%"
    >
      <Group>
        <Burger opened={opened} onClick={toggle} size="sm" color="white" />
        <Link to="/" style={{ textDecoration: "none" }}>
          <Text fw={800} size="lg" c="white">
            {APP_FULL_NAME}
          </Text>
        </Link>
      </Group>
      <Autocomplete
        w="500px"
        placeholder="Search"
        leftSection={
          <IconSearch
            style={{ width: rem(16), height: rem(16) }}
            stroke={1.5}
          />
        }
        data={[
          "React",
          "Angular",
          "Vue",
          "Next.js",
          "Riot.js",
          "Svelte",
          "Blitz.js",
        ]}
        visibleFrom="xs"
      />
      <Group>
        <Group ml={50} gap={5} visibleFrom="sm" c="white">
          {items}
        </Group>
        <Group gap={5} visibleFrom="sm">
          <HoverCard
            width={600}
            position="bottom"
            radius="md"
            shadow="md"
            withinPortal
          >
            <HoverCard.Target>
              <a
                href=""
                className={classes.link}
                onClick={(event) => event.preventDefault()}
              >
                <IconLayoutGridFilled color="white" />
              </a>
            </HoverCard.Target>
            <HoverCard.Dropdown style={{ overflow: "hidden" }}>
              <Group justify="space-between" px="md">
                <Text fw={500}>Applications</Text>
                <Anchor href="#" fz="xs">
                  View all
                </Anchor>
              </Group>
              <Divider my="sm" />
              <SimpleGrid cols={2} spacing={0}>
                {hOverLinks}
              </SimpleGrid>
            </HoverCard.Dropdown>
          </HoverCard>
          <HoverCard
            width={300}
            position="bottom"
            radius="md"
            shadow="md"
            withinPortal
          >
            <HoverCard.Target>
              <a
                href=""
                className={classes.link}
                onClick={(event) => event.preventDefault()}
              >
                <IconBellFilled color="white" />
              </a>
            </HoverCard.Target>
            <HoverCard.Dropdown style={{ overflow: "hidden" }}>
              <Group justify="space-between" px="md">
                <Text fw={500}>Notification</Text>
                <Anchor href="#" fz="xs">
                  View all{" "}
                  <Badge size="sm" circle ml={2}>
                    {hOverLinks.length}
                  </Badge>
                </Anchor>
              </Group>
              <Divider my="sm" />
              <SimpleGrid cols={1} spacing={0}>
                {hOverLinks}
              </SimpleGrid>
            </HoverCard.Dropdown>
          </HoverCard>
        </Group>
        <UserMenu />
      </Group>
    </Flex>
  )
}

export default HeaderSearch
