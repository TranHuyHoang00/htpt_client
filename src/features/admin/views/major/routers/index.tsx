import { Navigate, Route, Routes } from "react-router-dom";
import { Major } from "../views/Major";

export const RoutesMajor = () => {
  return (
    <Routes>
      <Route path="list" element={<Major />} />
      <Route path="*" element={<Navigate to={"/admin/major/list"} />} />
    </Routes>
  );
};
