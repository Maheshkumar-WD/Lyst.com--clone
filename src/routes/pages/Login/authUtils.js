import axios from "axios";
import { Navigate } from "react-router-dom";

export const userSignIn = (data, setIsAuth, setUserData) => {
  axios
    .get("https://lyst-db-constructweek.herokuapp.com/users")
    .then((res) => {
      return res.data.map((user) => {
        if (data.email === user.email && data.password === user.password) {
          setIsAuth(true);
          setUserData(user);
        } else {
          console.log("user not found");
        }
      });
    })
    .catch((err) => console.log(err));
};

export const userSignUp = (data) => {
  console.log(data);
  axios({
    method: "post",
    headers: { "Context-Type": "application/json" },
    data: data,
    url: "https://lyst-db-constructweek.herokuapp.com/users",
  })
    .then((res) => {
      console.log("Data Added Success");
      return <Navigate to="/signin" />;
    })
    .catch((err) => console.log("Failed to add Data"));
};
