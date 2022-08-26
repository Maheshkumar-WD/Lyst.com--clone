import React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Text,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
function LoginPage() {
  return (
    <Container bg={"white"} marginTop="50px" padding={"24px"}>
      <Heading textAlign={"center"} margin={"12px 0"} size={"lg"}>
        Login
      </Heading>
      <Stack>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button className={styles.authActionBtn}>Login</Button>
      </Stack>
      <Text marginTop="24px">
        Not Joined with us? <Link to="/signup">Join</Link>
      </Text>
    </Container>
  );
}

export default LoginPage;
