import { useState } from "react";
import { Space } from "antd";
import { Layout } from "./Layout";
import { Logo } from "../sider/Logo";
import { Dropdown } from "../sider/Dropdown";
import { MenuIcon } from "../menu/MenuIcon";
import { Menu } from "../menu/Menu";
import { MenuDrawer } from "../menu/MenuDrawer";

export const Header = () => {
  const [openMenuDrawer, setOpenMenuDrawer] = useState(false);
  return (
    <Layout>
      <Logo />
      <Space>
        <MenuIcon setOpenMenuDrawer={setOpenMenuDrawer} />
        <Dropdown />
      </Space>
      <MenuDrawer
        openMenuDrawer={openMenuDrawer}
        setOpenMenuDrawer={setOpenMenuDrawer}
      >
        <Menu />
      </MenuDrawer>
    </Layout>
  );
};
