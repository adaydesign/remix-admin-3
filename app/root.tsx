// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css"

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react"
import { ColorSchemeScript, Flex, MantineProvider } from "@mantine/core"
import { AuthLayout } from "~/layouts"
import { LinksFunction, MetaFunction } from "@remix-run/node"
import { APP_DESCRIPTION, APP_NAME } from "~/constants/app.constants"
import { theme } from "~/constants/app.theme"
import { cssBundleHref } from "@remix-run/css-bundle"
import { ErrorTitle } from "./components/layouts"
import { IconHome } from "@tabler/icons-react"

export const meta: MetaFunction = () => {
  return [{ title: APP_NAME }, { name: APP_NAME, content: APP_DESCRIPTION }]
}

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  // ...
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Prompt:wght@100;300;400;500;600;700;800&display=swap",
  },
]

// export const handle = {
//   breadcrumb: () => {return {
//     title: "Home",
//     to: "/",
//     icon: IconHome
//   }},
// }

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <AuthLayout>{children}</AuthLayout>
        </MantineProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary() {
  const error: any = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <ErrorTitle code={error.status} title={error.statusText} message={error.data}/>
    )
  }

  return (
    <ErrorTitle code="No Status" title="Error!" message={error?.message ?? "Unknown error"}/>
  )
}
