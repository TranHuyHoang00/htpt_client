import { useNavigate } from "react-router-dom";
import { Divider, Button } from "antd";
type ButtonFooter = {
  title: string;
  href: string;
};
type FooterProps = {
  listButtonFooter: ButtonFooter[];
};
export const Footer = ({ listButtonFooter }: FooterProps) => {
  const navigate = useNavigate();
  return (
    <div className="text-[14px] text-center">
      {/* <Divider style={{ borderColor: "#6e6d6b" }}>
        <span className="text-gray-500">or</span>
      </Divider>
      <div className="space-y-[5px]">
        {listButtonFooter &&
          listButtonFooter.map((button, index) => {
            return (
              <Button
                key={index}
                onClick={() => navigate(button.href)}
                type="primary"
                className="w-full font-medium"
              >
                {button.title}
              </Button>
            );
          })}
      </div> */}
    </div>
  );
};
