import { Button, Result, Space } from "antd";
import { useNavigate } from "react-router-dom";
type ErrorElementProps = {
  href: string;
};
export const ErrorElement = ({ href }: ErrorElementProps) => {
  const navigate = useNavigate();
  return (
    <Result
      status="error"
      title="ERROR SYSTEM"
      subTitle="Sorry, the system is experiencing an error. Please try again later."
      extra={
        <Space>
          <Button onClick={() => navigate(href)} type="primary">
            Go back
          </Button>
          <Button onClick={() => window.location.reload()} type="primary">
            Reload
          </Button>
        </Space>
      }
    />
  );
};
