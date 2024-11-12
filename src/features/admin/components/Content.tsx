import * as React from "react";
import { Layout } from "antd";
const ContentAnt = Layout.Content;
type ContentProps = {
  children: React.ReactNode;
  [key: string]: any;
};

export const Content = ({ children, ...props }: ContentProps) => {
  return <ContentAnt {...props}>{children}</ContentAnt>;
};
