import * as React from "react";
import { Layout as LayoutAnt } from "antd";

type LayoutProps = {
  children: React.ReactNode;
  [key: string]: any;
};

export const Layout = ({ children, ...props }: LayoutProps) => {
  return <LayoutAnt {...props}>{children}</LayoutAnt>;
};
