import { Menu as MenuAnt } from "antd";
import { useNavigate } from "react-router-dom";
import { MenuItem } from "./MenuItem";

export const Menu = () => {
  type ItemMenu = {
    key: string;
  };
  const navigate = useNavigate();
  const onClickMenuItem = (item: ItemMenu) => {
    navigate(`/admin/${item.key}`);
  };
  return (
    <MenuAnt
      mode="inline"
      items={MenuItem}
      onClick={(item) => onClickMenuItem(item)}
      className="bg-[#f5f5f5] pl-[10px] "
    />
  );
};
