import { useNavigate } from "react-router-dom";
export const Logo = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/admin")} className="cursor-pointer">
      <span className="text-[24px] text-[#106dd6] font-medium">ADMIN</span>
    </div>
  );
};
