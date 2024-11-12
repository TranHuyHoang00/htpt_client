import { ConfigProvider } from "antd";
import React, { PropsWithChildren } from "react";

export const AppConfigProvider: React.FC<PropsWithChildren> = ({
  children,
}) => (
  <ConfigProvider
    theme={{
      token: {
        borderRadius: 5,
      },
      components: {
        Layout: {
          siderBg: "#f5f5f5",
        },
        Menu: {
          activeBarBorderWidth: 0,
          itemSelectedBg: "#ffffff",
          itemSelectedColor: "#106dd6",
        },
        Modal: {
          titleFontSize: 14,
        },
        Form: {
          verticalLabelPadding: 0,
        },
        Segmented: {
          itemSelectedBg: "#1677ff",
          itemSelectedColor: "#ffffff",
        },
      },
    }}
  >
    {children}
  </ConfigProvider>
);
