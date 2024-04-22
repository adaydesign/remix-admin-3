import { IconGauge, IconNotes, IconCalendarStats, IconPresentationAnalytics, IconFileAnalytics, IconAdjustments, IconLock } from "@tabler/icons-react";

export type AppMenu = {
    icon: React.FC<any>
    label: string
    initiallyOpened?: boolean
    links?: { label: string; to: string }[]
    to?: string
}

const APP_MENU: AppMenu[] = [
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
        { label: "Upcoming releases", to: "/release/upcoming" },
        { label: "Previous releases", to: "/release/previous" },
        { label: "Releases schedule", to: "/release/schedule" },
      ],
    },
    { label: "Analytics", icon: IconPresentationAnalytics, to: "/analytics" },
    { label: "Contracts", icon: IconFileAnalytics, to: "/contracts" },
    { label: "Settings", icon: IconAdjustments, to: "/settings" },
    {
      label: "Security",
      icon: IconLock,
      links: [
        { label: "Enable 2FA", to: "/security/2fa" },
        { label: "Change password", to: "/security/password" },
        { label: "Recovery codes", to: "/security/recovery" },
      ],
    },
  ] as const;

  export { APP_MENU }