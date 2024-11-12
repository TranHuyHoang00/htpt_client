import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
type PageNotFoundProps = {
  href: string;
};
export const PageNotFound = ({ href }: PageNotFoundProps) => {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button onClick={() => navigate(href)} type="primary">
          Go back
        </Button>
      }
    />
  );
};
