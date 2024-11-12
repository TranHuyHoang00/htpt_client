import { Drawer } from "antd";

type MenuDrawerProps = {
  children: React.ReactNode;
  openMenuDrawer: boolean;
  setOpenMenuDrawer: (value: boolean) => void;
};
export const MenuDrawer = ({
  children,
  openMenuDrawer,
  setOpenMenuDrawer,
}: MenuDrawerProps) => {
  return (
    <Drawer
      open={openMenuDrawer}
      onClose={() => setOpenMenuDrawer(false)}
      title="Menu"
      placement={"left"}
      width={250}
      className="md:hidden block"
    >
      {children}
    </Drawer>
  );
};
