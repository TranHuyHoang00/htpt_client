import { useState } from "react";
import type { FormProps } from "antd";
import { useNavigate } from "react-router-dom";
import { DataLoginReq } from "../../../index";
import Auth from "@/lib/auth";
import { AmzButton } from "@/components/Elements/AmzButton";
import { AmzForm } from "@/components/Elements/AmzForm";
import { AmzFormItem } from "@/components/Elements/AmzForm/AmzFormItem";
import { AmzInput } from "@/components/Elements/AmzInput";
import { AmzSelect } from "@/components/Elements/AmzSelect";
export const FormLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish: FormProps<DataLoginReq>["onFinish"] = async (values) => {
    setIsLoading(true);
    const success = await Auth.login(values);
    if (success) {
      navigate("/admin");
    }
    setIsLoading(false);
    navigate("/admin");
  };
  return (
    <AmzForm layout="vertical" onFinish={onFinish}>
      <AmzFormItem<DataLoginReq>
        name="phone"
        // rules={[{ required: true, message: "Please input your phone!" }]}
      >
        <AmzSelect
          options={[
            { id: 1, label: "CNTT" },
            { id: 2, label: "ATTT" },
          ]}
          style={{ width: 300, height: 45 }}
          size="middle"
          placeholder="Khoa"
        />
      </AmzFormItem>
      <AmzFormItem<DataLoginReq>
        name="phone"
        // rules={[{ required: true, message: "Please input your phone!" }]}
      >
        <AmzInput
          style={{ width: 300 }}
          size="middle"
          placeholder="Tài khoản"
        />
      </AmzFormItem>
      <AmzFormItem<DataLoginReq>
        name="password"
        // rules={[{ required: true, message: "Please input your password!" }]}
      >
        <AmzInput
          style={{ width: 300 }}
          size="middle"
          type="password"
          placeholder="Mật khẩu"
        />
      </AmzFormItem>
      <AmzButton
        size="large"
        loading={isLoading}
        className="w-full font-medium"
        type="primary"
        htmlType="submit"
      >
        ĐĂNG NHẬP
      </AmzButton>
    </AmzForm>
  );
};
