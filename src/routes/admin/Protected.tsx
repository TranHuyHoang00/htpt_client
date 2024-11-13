import { Navigate, Outlet } from "react-router-dom";
import Auth from "@/lib/auth";
import { Admin } from "@/features/admin/views/Admin";
import { ErrorElement } from "@/components/errors/ErrorElement";
import { PageNotFound } from "@/components/errors/PageNotFound";
import { RoutesStudent } from "@/features/admin/views/student";
import { RoutesClass } from "@/features/admin/views/class";
import { RoutesDepartment } from "@/features/admin/views/department";
import { RoutesMajor } from "@/features/admin/views/major";
import { RoutesTeacher } from "@/features/admin/views/teacher";
import { RoutesSubject } from "@/features/admin/views/subject";
import { AmzResult } from "@/components/Elements/AmzResult";
import { SmileOutlined } from "@ant-design/icons";
const AppAdminProtected = () => {
  const isLogin = Auth.isLogin();
  return isLogin ? (
    <Admin>
      <Outlet />
    </Admin>
  ) : (
    <Navigate to="/admin/auth/login" replace />
  );
};
export const RoutesProtectedAdmin = [
  {
    path: "admin/*",
    element: <AppAdminProtected />,
    children: [
      {
        path: "",
        element: (
          <div>
            {" "}
            <AmzResult
              icon={<SmileOutlined />}
              title="Chào mừng đến với trang quản lý !"
            />
          </div>
        ),
      },
      { path: "student/*", element: <RoutesStudent /> },
      { path: "class/*", element: <RoutesClass /> },
      { path: "department/*", element: <RoutesDepartment /> },
      { path: "major/*", element: <RoutesMajor /> },
      { path: "teacher/*", element: <RoutesTeacher /> },
      { path: "subject/*", element: <RoutesSubject /> },
      { path: "*", element: <PageNotFound href="/admin" /> },
    ],
    errorElement: (
      <Admin>
        <ErrorElement href="/admin" />
      </Admin>
    ),
  },
];
