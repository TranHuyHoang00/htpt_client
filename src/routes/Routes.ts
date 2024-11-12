import { createBrowserRouter } from "react-router-dom";
import { RoutesProtectedAdmin } from "@/routes/admin/Protected";
import { RoutesPublicAdmin } from "@/routes/admin/Public";
import { RoutesProtectedUser } from "@/routes/user/Protected";
import { RoutesPublicUser } from "@/routes/user/Public";

export const RoutesApp = () => {
  return createBrowserRouter([
    ...RoutesPublicUser,
    ...RoutesProtectedUser,
    ...RoutesPublicAdmin,
    ...RoutesProtectedAdmin,
  ]);
};
