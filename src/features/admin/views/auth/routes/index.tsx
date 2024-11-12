import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../views/login/Login";
import { Forgot } from "../views/forgot/Forgot";
import { Register } from "../views/register/Register";
export const RoutesAuth = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forgot-password" element={<Forgot />} />
      <Route path="*" element={<Navigate to={"/admin/auth/login"} />} />
    </Routes>
  );
};
