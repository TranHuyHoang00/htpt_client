import { Navigate, Route, Routes } from "react-router-dom";
import { Subject } from "../views/Subject";

export const RoutesSubject = () => {
  return (
    <Routes>
      <Route path="list" element={<Subject />} />
      <Route path="*" element={<Navigate to={"/admin/subject/list"} />} />
    </Routes>
  );
};
