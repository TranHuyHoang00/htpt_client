import { Navigate, Route, Routes } from "react-router-dom";
import { Student } from "../views/Student";

export const RoutesStudent = () => {
  return (
    <Routes>
      <Route path="list" element={<Student />} />
      <Route path="*" element={<Navigate to={"/admin/student/list"} />} />
    </Routes>
  );
};
