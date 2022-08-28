import {
  Button,
  Container,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { userSignUp } from "./authUtils";
import axios from "axios";
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
  let submitBtn = useRef();
  let [existEmailStyle, setExistEmailStyle] = useState({
    display: "none",
    color: "red",
    fontSize: "14px",
    paddingLeft: "6px",
  });

  useEffect(() => {
    axios
      .get("https://lyst-db-constructweek.herokuapp.com/users")
      .then((res) => {
        res.data.map((user) => {
          if (user.email === formData.email) {
            submitBtn.current.disabled = true;
            setExistEmailStyle({
              ...existEmailStyle,
              display: "inline",
            });
          } else {
            submitBtn.current.disabled = false;
            setExistEmailStyle({
              ...existEmailStyle,
              display: "none",
            });
          }
        });
      })
      .catch((err) => console.log(err));
  }, [formData.email]);

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
    }
  };

  return (
    <Container
      className={styles.formContainer}
      bg={"white"}
      marginTop="50px"
      padding={"24px"}
    >
      <Heading textAlign={"center"} margin={"12px 0"} size={"lg"}>
        Sign Up
      </Heading>
      <form action="">
        <Stack>
          <Input
            onChange={(e) => handleChange(e)}
            name="name"
            type="text"
            placeholder="User Name"
            value={formData.name}
            required="required"
          />
          <Text style={existEmailStyle}>Email already exist</Text>
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
            ref={submitBtn}
            onClick={() => userSignUp(formData)}
            className={styles.authActionBtn}
          >
            Join
          </Button>
        </Stack>
      </form>
      <Text marginTop="24px">
        All ready Joined? <Link to="/signin">Login</Link>
      </Text>
    </Container>
  );
}

export default RegisterPage;
