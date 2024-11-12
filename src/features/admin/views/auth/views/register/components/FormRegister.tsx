import { useState } from "react";
import type { FormProps } from "antd";
import { AmzButton } from "@/components/Elements/AmzButton";
import { AmzForm } from "@/components/Elements/AmzForm";
import { AmzFormItem } from "@/components/Elements/AmzForm/AmzFormItem";
import { AmzInput } from "@/components/Elements/AmzInput";
import { DataLoginReq } from "../../../index";

export const FormRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const onFinish: FormProps<DataLoginReq>["onFinish"] = async (values) => {
    setIsLoading(true);
  };
  return (
    <AmzForm layout="vertical" onFinish={onFinish}>
      <AmzFormItem<DataLoginReq>
        name="phone"
        rules={[{ required: true, message: "Please input your phone!" }]}
      >
        <AmzInput style={{ width: 300 }} size="middle" placeholder="Phone" />
      </AmzFormItem>
      <AmzFormItem<DataLoginReq>
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <AmzInput
          style={{ width: 300 }}
          size="middle"
          type="password"
          placeholder="Password"
        />
      </AmzFormItem>
      <AmzButton
        size="large"
        loading={isLoading}
        className="w-full font-medium"
        type="primary"
        htmlType="submit"
      >
        REGISTER
      </AmzButton>
    </AmzForm>
  );
};
