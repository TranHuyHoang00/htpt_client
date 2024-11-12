import * as React from "react";
type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex items-center justify-center py-[20px]">
      <div className="bg-white p-[20px] rounded-[5px] shadow-md">
        <div className="space-y-[10px]">{children}</div>
      </div>
    </div>
  );
};
