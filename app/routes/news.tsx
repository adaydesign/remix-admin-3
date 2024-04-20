import { Outlet } from "@remix-run/react"
import { IconNews } from "@tabler/icons-react"

export const handle = {
  breadcrumb: {
    title: "News",
    to: "/",
    icon: IconNews,
  },
}

const NewsPage = () => {
  return (
    <Outlet />
  )
}

export default NewsPage
