import { useNavigate } from "react-router-dom";
import { startTransition } from "react";
import type { MenuProps } from "antd";
import { AiFillCaretDown } from "react-icons/ai";
import { MdExitToApp } from "react-icons/md";
import AvatarImage from "@/assets/images/avatar.png";
import Auth from "@/lib/auth";
import { AmzDropdown } from "@/components/Elements/AmzDropdown";
import { AmzAvatar } from "@/components/Elements/AmzAvatar";
export const Dropdown = () => {
  const navigate = useNavigate();
  const items: MenuProps["items"] = [
    {
      key: "account",
      label: "Tài khoản",
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      icon: <MdExitToApp />,
      label: "Đăng xuất",
    },
  ];
  const onClick: MenuProps["onClick"] = async ({ key }) => {
    switch (key) {
      case "logout":
        await Auth.logout();
        startTransition(() => {
          navigate("/admin/auth/login");
        });
        break;

      default:
        break;
    }
  };
  const dataAccount = Auth.getData();
  return (
    <AmzDropdown menu={{ items, onClick }}>
      <div
        className="bg-white px-[10px] py-[5px] rounded-[5px]
        flex items-center justify-between space-x-[5px]"
      >
        <div className="flex-shrink-0">
          <AmzAvatar size={36} src={AvatarImage} />
        </div>
        <div className="line-clamp-1 flex-1 max-w-[120px]">
          <span className="text-gray-600 cursor-default font-medium">
            {dataAccount?.data ? dataAccount?.data?.user?.full_name : "PhucDai"}
          </span>
        </div>
        <AiFillCaretDown />
      </div>
    </AmzDropdown>
  );
};
