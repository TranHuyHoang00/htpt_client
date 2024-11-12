import { Navigate, Route, Routes } from "react-router-dom";
import { Class } from "../views/Class";

export const RoutesClass = () => {
  return (
    <Routes>
      <Route path="list" element={<Class />} />
      <Route path="*" element={<Navigate to={"/admin/class/list"} />} />
    </Routes>
  );
};
