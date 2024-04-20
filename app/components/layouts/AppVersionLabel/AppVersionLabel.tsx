import { Group, Code, Text } from "@mantine/core"
import { APP_VERSION } from "~/constants/app.constants"

const AppVersionLabel = () => {
  return (
    <Group justify="space-between">
      <Text>version</Text>
      <Code fw={700}>{APP_VERSION}</Code>
    </Group>
  )
}

export default AppVersionLabel
