import { UnstyledButton, Group, Avatar, Text, rem, Flex } from "@mantine/core"
import classes from "./UserButton.module.css"

const UserButton = () => {
  return (
    <UnstyledButton className={classes.user}>
      <Group>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
          radius="xl"
        />
        <Flex direction="column">
          <Text size="sm" fw={500}>
            Jane Spoonfighter
          </Text>

          <Text c="dimmed" size="xs">
            janspoon@fighter.dev
          </Text>
        </Flex>
      </Group>
    </UnstyledButton>
  )
}

export default UserButton
