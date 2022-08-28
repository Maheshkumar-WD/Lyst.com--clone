import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Text,
  Stack,
} from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import styles from "./Login.module.css";
import { AuthContext } from "../../../context/AuthContext";
import { userSignIn } from "./authUtils";
function LoginPage() {
  const { isAuth, setIsAuth, user, setUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  if (isAuth) {
    return <Navigate to="/" />;
  }
  const handleChange = (e) => {
    let { name, value } = e.target;
    let currData = {
      ...formData,
      [name]: value,
    };
    setFormData(currData);
  };

  return (
    <>
      <Container
        className={styles.formContainer}
        bg={"white"}
        marginTop="50px"
        padding={"24px"}
      >
        <Heading textAlign={"center"} margin={"12px 0"} size={"lg"}>
          Login
        </Heading>
        <Stack>
          <Input
            name="email"
            onChange={(e) => handleChange(e)}
            value={formData.email}
            type="email"
            placeholder="Email"
          />
          <Input
            name="password"
            onChange={(e) => handleChange(e)}
            value={formData.password}
            type="password"
            placeholder="Password"
          />
          <Button
            onClick={() => userSignIn(formData, setIsAuth, setUser)}
            className={styles.authActionBtn}
          >
            Login
          </Button>
        </Stack>
        <Text marginTop="24px">
          Not Joined with us? <Link to="/signup">Join</Link>
        </Text>
      </Container>
    </>
  );
}

export default LoginPage;
