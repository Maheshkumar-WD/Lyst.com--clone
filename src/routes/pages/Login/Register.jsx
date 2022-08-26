import {
  Button,
  Container,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import userSignUp from "./authUtils";
// import { styles } from "./Login.module.css";
import styles from "./Login.module.css";
const initData = {
  name: "",
  email: "",
  password: "",
  address: {
    street: null,
    city: null,
    pincode: null,
    state: null,
    country: null,
    mobile: null,
  },

  cart: [],

  orders: [],
};

function RegisterPage() {
  let [formData, setFormData] = useState(initData);
  let [cpass, setCPass] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name !== "confirmPassword") {
      let newData = {
        ...formData,
        [name]: value,
      };
      setFormData(newData);
    } else {
      setCPass(value);
      console.log(cpass);
    }
  };
  let disabled =
    formData.password !== cpass &&
    formData.name == "" &&
    formData.email == "" &&
    formData.password == ""
      ? "disabled"
      : "";

  return (
    <Container bg={"white"} marginTop="50px" padding={"24px"}>
      <Heading textAlign={"center"} margin={"12px 0"} size={"lg"}>
        Sign Up
      </Heading>
      <Stack>
        <Input
          onChange={(e) => handleChange(e)}
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
        />
        <Input
          onChange={(e) => handleChange(e)}
          name="password"
          type="password"
          value={formData.password}
          placeholder="Password"
        />
        <Input
          onChange={(e) => handleChange(e)}
          name="confirmPassword"
          type="password"
          value={cpass}
          placeholder="Confirm Password"
        />
        <Button
          disabled={disabled}
          onClick={() => userSignUp(formData)}
          className={styles.authActionBtn}
        >
          Join
        </Button>
      </Stack>
      <Text marginTop="24px">
        All ready Joined? <Link to="/signin">Login</Link>
      </Text>
    </Container>
  );
}

export default RegisterPage;
