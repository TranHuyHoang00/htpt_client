import { Button, Result, Space } from "antd";
import { useNavigate } from "react-router-dom";
export const ErrorBoundaryFallback = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="error"
      title="ERROR SYSTEM"
      subTitle="Sorry, the system is experiencing an error. Please try again later."
      extra={
        <Space>
          <Button onClick={() => navigate("/admin")} type="primary">
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
