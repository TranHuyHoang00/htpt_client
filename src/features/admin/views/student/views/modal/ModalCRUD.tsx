import { Form } from "antd";
import { AmzButton } from "@/components/Elements/AmzButton";
import { AmzModal } from "@/components/Elements/AmzModal";
import { AmzSpace } from "@/components/Elements/AmzSpace";
import { getModalTitle } from "@/utils/modal/Modal";
import { DataStudent } from "../../index";
import { AmzInput } from "@/components/Elements/AmzInput";
import { AmzFormItem } from "@/components/Elements/AmzForm/AmzFormItem";
import { AmzForm } from "@/components/Elements/AmzForm";
import { AmzSelect } from "@/components/Elements/AmzSelect";
import { AmzDatePicker } from "@/components/Elements/AmzDatePicker";
type ModalCRUDProps = {
  open: boolean;
  typeModal: string;
  width: number;
  studentId: number;
  onCancel: (value: boolean) => void;
};

export const ModalCRUD = ({
  open,
  typeModal,
  width,
  onCancel,
}: ModalCRUDProps) => {
  const [form] = Form.useForm();
  return (
    <AmzModal
      forceRender
      title={<span className="uppercase">{getModalTitle(typeModal)}</span>}
      open={open}
      width={width}
      onCancel={() => onCancel(false)}
      destroyOnClose
      modalRender={(dom) => (
        <AmzForm
          form={form}
          labelAlign="left"
          layout="horizontal"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          clearOnDestroy
        >
          {dom}
        </AmzForm>
      )}
      footer={
        <AmzSpace>
          <AmzButton onClick={() => onCancel(false)}>Thoát</AmzButton>
          <AmzButton
            htmlType="submit"
            hidden={typeModal === "detail"}
            type="primary"
          >
            Lưu
          </AmzButton>
        </AmzSpace>
      }
    >
      <AmzFormItem<DataStudent>
        label="Mã sinh viên"
        name="masv"
        rules={[{ required: true, message: "Vui lòng nhập MÃ SINH VIÊN" }]}
      >
        <AmzInput disabled={typeModal === "detail"} />
      </AmzFormItem>
      <AmzFormItem<DataStudent>
        label="Họ"
        name="ho"
        rules={[{ required: true, message: "Vui lòng nhập HỌ" }]}
      >
        <AmzInput disabled={typeModal === "detail"} />
      </AmzFormItem>
      <AmzFormItem<DataStudent>
        label="Tên"
        name="ten"
        rules={[{ required: true, message: "Vui lòng nhập TÊN" }]}
      >
        <AmzInput disabled={typeModal === "detail"} />
      </AmzFormItem>
      <AmzFormItem<DataStudent>
        label="Phái"
        name="phai"
        rules={[{ required: true, message: "Vui lòng chọn PHÁI" }]}
      >
        <AmzSelect size="large" disabled={typeModal === "detail"} />
      </AmzFormItem>
      <AmzFormItem<DataStudent>
        label="Dịa chỉ"
        name="diachi"
        rules={[{ required: true, message: "Vui lòng nhập DỊA CHỈ" }]}
      >
        <AmzInput disabled={typeModal === "detail"} />
      </AmzFormItem>
      <AmzFormItem<DataStudent>
        label="Ngày sinh"
        name="ngaysinh"
        rules={[{ required: true, message: "Vui lòng chọn NGÀY SINH" }]}
      >
        <AmzDatePicker size="large" disabled={typeModal === "detail"} />
      </AmzFormItem>
      <AmzFormItem<DataStudent>
        label="Mã lớp"
        name="malop"
        rules={[{ required: true, message: "Vui lòng chọn MÃ LỚP" }]}
      >
        <AmzSelect size="large" disabled={typeModal === "detail"} />
      </AmzFormItem>
      <AmzFormItem<DataStudent>
        label="Mã chuyên ngành"
        name="macn"
        rules={[{ required: true, message: "Vui lòng chọn MÃ CHUYÊN NGÀNH" }]}
      >
        <AmzSelect size="large" disabled={typeModal === "detail"} />
      </AmzFormItem>
    </AmzModal>
  );
};
