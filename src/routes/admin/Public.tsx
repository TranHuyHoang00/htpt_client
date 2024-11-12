import { Navigate, Outlet } from "react-router-dom";
import { RoutesAuth } from "@/features/admin/views/auth";
import Auth from "@/lib/auth";
import { ErrorElement } from "@/components/errors/ErrorElement";
const AppAdminAuth = () => {
  const isLogin = Auth.isLogin();
  return !isLogin ? (
    <div className="h-screen w-screen flex items-center justify-center bg-slate-100">
      <Outlet />
    </div>
  ) : (
    <Navigate to="/admin" replace />
  );
};
export const RoutesPublicAdmin = [
  {
    path: "admin/auth/*",
    element: <AppAdminAuth />,
    children: [{ path: "*", element: <RoutesAuth /> }],
    errorElement: <ErrorElement href="/admin" />,
  },
];
