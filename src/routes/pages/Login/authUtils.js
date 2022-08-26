import { EnvironmentProvider } from "@chakra-ui/react";
import axios from "axios";

const userSignUp = (data) => {
  axios({
    method: "post",
    url: process.env.REACT_APP_USER_API_BASE_URL,
    data: JSON.stringify(data),
  })
    .then((res) => console.log("Data Added Success"))
    .catch((err) => console.log("Failed to add Data"));
};

export default userSignUp;
