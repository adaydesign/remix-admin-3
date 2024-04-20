import { Group, Code, ScrollArea, rem, Text } from "@mantine/core"
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from "@tabler/icons-react"
import { LinksGroup } from "../NavbarLinksGroup/NavbarLinksGroup"
import classes from "./NavbarNested.module.css"

const mockdata = [
  { label: "Dashboard", icon: IconGauge, to: "/dashboard"},
  {
    label: "Market news",
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: "Overview", to: "/news/overview" },
      { label: "Forecasts", to: "/news/forecasts" },
      { label: "Outlook", to: "/news/outlook" },
      { label: "Real time", to: "/news/realtime" },
    ],
  },
  {
    label: "Releases",
    icon: IconCalendarStats,
    links: [
      { label: "Upcoming releases", to: "/" },
      { label: "Previous releases", to: "/" },
      { label: "Releases schedule", to: "/" },
    ],
  },
  { label: "Analytics", icon: IconPresentationAnalytics, to: "/analytics" },
  { label: "Contracts", icon: IconFileAnalytics, to: "/contracts" },
  { label: "Settings", icon: IconAdjustments, to: "/settings" },
  {
    label: "Security",
    icon: IconLock,
    links: [
      { label: "Enable 2FA", to: "/" },
      { label: "Change password", to: "/" },
      { label: "Recovery codes", to: "/" },
    ],
  },
]

const NavbarNested = () => {
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ))

  return (
    <nav className={classes.navbar}>
      <div className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </div>
    </nav>
  )
}

export default NavbarNested
