import { Navigate, Route, Routes } from "react-router-dom";
import { Department } from "../views/Department";

export const RoutesDepartment = () => {
  return (
    <Routes>
      <Route path="list" element={<Department />} />
      <Route path="*" element={<Navigate to={"/admin/department/list"} />} />
    </Routes>
  );
};
