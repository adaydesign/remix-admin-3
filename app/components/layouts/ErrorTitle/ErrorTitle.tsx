import { Title, Text, Button, Container, Group, useMantineTheme } from '@mantine/core';
import classes from './ErrorTitle.module.css';
import { Link } from '@remix-run/react';

interface ErrorTitleProps {
  code: string|number;
  title: string;
  message: string;
}

const ErrorTitle = ({code, title, message}:ErrorTitleProps) => {
  const theme = useMantineTheme()

  return (
    <Container className={classes.root}>
      <Text className={classes.label} c={theme.primaryColor}>{code}</Text>
      <Title className={classes.title}>{title}</Title>
      <Text c="dimmed" size="lg" ta="center" className={classes.description}>
        {message}
      </Text>
      <Group justify="center">
        <Link to="/">
          <Button variant="subtle" size="md">
            Take me back to home page
          </Button>
        </Link>
      </Group>
    </Container>
  );
}

export default ErrorTitle;