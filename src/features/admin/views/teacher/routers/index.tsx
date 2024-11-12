import { Navigate, Route, Routes } from "react-router-dom";
import { Teacher } from "../views/Teacher";

export const RoutesTeacher = () => {
  return (
    <Routes>
      <Route path="list" element={<Teacher />} />
      <Route path="*" element={<Navigate to={"/admin/teacher/list"} />} />
    </Routes>
  );
};
