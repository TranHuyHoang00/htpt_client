import { MenuOutlined } from "@ant-design/icons";
type MenuIconProps = {
  setOpenMenuDrawer: (value: boolean) => void;
};

export const MenuIcon = ({ setOpenMenuDrawer }: MenuIconProps) => {
  return (
    <MenuOutlined
      onClick={() => setOpenMenuDrawer(true)}
      className="block lg:hidden text-[20px] text-[#757c91] cursor-pointer"
    />
  );
};
