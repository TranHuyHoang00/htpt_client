import * as React from "react";
import { useNavigate } from "react-router-dom";
import Auth from "@/lib/auth";
import { AmzButton } from "@/components/Elements/AmzButton";
import { AmzResult } from "@/components/Elements/AmzResult";
export enum ROLES {
  ADMIN = "ADMIN",
  USER = "USER",
}

type CheckType = "AND" | "OR";
type RoleType = "administrator" | "standard-user";
type Label = "menu" | "page" | "routes" | undefined;
export const useAuthorization = () => {
  const user = Auth.getData();
  if (!user) {
    throw Error("User does not exist!");
  }
  const checkAccess = React.useCallback(
    ({
      roles,
      checkType = "OR",
    }: {
      roles: RoleType[] | RoleType;
      checkType?: CheckType;
    }) => {
      const allowedRoles = typeof roles === "string" ? [roles] : roles;
      if (allowedRoles && allowedRoles.length > 0) {
        return checkType === "OR"
          ? allowedRoles?.some((item) =>
              user?.roles?.map((item: any) => item.name).includes(item)
            )
          : allowedRoles?.every((item) =>
              user?.roles?.map((item: any) => item.name).includes(item)
            );
      }

      return true;
    },
    [user.roles]
  );

  return { checkAccess, roles: user.roles };
};
type AuthorizationProps = {
  children: React.ReactNode;
  checkType?: CheckType;
  throwError?: boolean;
  allowedRoles: RoleType[] | RoleType;
  label?: Label;
};

const Result = () => {
  const navigate = useNavigate();
  return (
    <AmzResult
      status="403"
      title="403"
      subTitle={"Sorry, you are not authorized to access this page."}
      extra={[
        <AmzButton type="primary" onClick={() => navigate("/admin")}>
          Back Home
        </AmzButton>,
      ]}
    />
  );
};
const classifyLabel = (label: Label) => {
  switch (label) {
    case "menu":
      return <></>;
    case "page":
      return <Result />;
    default:
      break;
  }
};

export const Authorization = ({
  checkType = "OR",
  allowedRoles,
  children,
  throwError = false,
  label,
}: AuthorizationProps) => {
  let canAccess = false;
  const { checkAccess } = useAuthorization();
  if (allowedRoles) {
    canAccess = checkAccess({
      roles: allowedRoles,
      checkType,
    });
  }
  return (
    <>{canAccess ? children : throwError ? <Result /> : classifyLabel(label)}</>
  );
};
