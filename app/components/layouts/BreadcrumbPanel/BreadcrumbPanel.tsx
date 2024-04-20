import { Breadcrumbs, Flex } from "@mantine/core"
import { useMatches } from "@remix-run/react"
import BreadcrumbLink from "../BreadcrumbLink/BreadcrumbLink"

const BreadcrumbPanel = () => {
  const matches = useMatches()
  return (
    <Flex w="100%" justify="flex-end">
      <Breadcrumbs>
        {matches
          // skip routes that don't have a breadcrumb
          .filter((match: any) => match.handle && match.handle.breadcrumb)
          // render breadcrumbs!
          .map((match: any, index) => {
            return ( 
            <BreadcrumbLink
              item={match.handle?.breadcrumb}
              key={index}
            />
          )}
          
          )}
      </Breadcrumbs>
    </Flex>
  )
}

export default BreadcrumbPanel
