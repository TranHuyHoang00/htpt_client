import * as React from "react";
import { Layout } from "antd";
const SiderAnt = Layout.Sider;

type SiderProps = {
  children: React.ReactNode;
};
export const Sider = ({ children }: SiderProps) => {
  return (
    <SiderAnt className="overflow-y-auto h-screen lg:block hidden" width={240}>
      {children}
    </SiderAnt>
  );
};
