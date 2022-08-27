import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/Login";
import RegisterPage from "./pages/Login/Register";
import ProductsPage from "./ProductsPage";

function AllRoutes() {
  const { isAuth } = useContext(AuthContext);
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        {/* <Route path="/:searchBy" element={<ProductsPage />} /> */}
        <Route path="/products/:searchBy" element={<ProductsPage />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
