import { AmzTitle } from "@/components/Elements/AmzTitle";

type HeaderProps = {
  title: string;
};
export const Header = ({ title }: HeaderProps) => {
  return (
    <div className="text-center ">
      {/* <div>
        <span className="text-[30px] font-medium">ADMIN</span>
      </div> */}
      <span className="font-medium text-[24px] text-gray-700">{title}</span>
    </div>
  );
};
