import { Form } from "antd";
import { AmzButton } from "@/components/Elements/AmzButton";
import { AmzModal } from "@/components/Elements/AmzModal";
import { AmzSpace } from "@/components/Elements/AmzSpace";
import { getModalTitle } from "@/utils/modal/Modal";
import { DataClass } from "../../index";
import { AmzInput } from "@/components/Elements/AmzInput";
import { AmzFormItem } from "@/components/Elements/AmzForm/AmzFormItem";
import { AmzForm } from "@/components/Elements/AmzForm";
import { AmzSelect } from "@/components/Elements/AmzSelect";
type ModalCRUDProps = {
  open: boolean;
  typeModal: string;
  width: number;
  classId: number;
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
      <AmzFormItem<DataClass>
        label="Mã lớp"
        name="malop"
        rules={[{ required: true, message: "Vui lòng nhập MÃ LỚP" }]}
      >
        <AmzInput disabled={typeModal === "detail"} />
      </AmzFormItem>
      <AmzFormItem<DataClass>
        label="Tên lớp"
        name="tenlop"
        rules={[{ required: true, message: "Vui lòng nhập TÊN LỚP" }]}
      >
        <AmzInput disabled={typeModal === "detail"} />
      </AmzFormItem>
      <AmzFormItem<DataClass>
        label="Khóa học"
        name="khoahoc"
        rules={[{ required: true, message: "Vui lòng nhập KHÓA HỌC" }]}
      >
        <AmzInput disabled={typeModal === "detail"} />
      </AmzFormItem>
      <AmzFormItem<DataClass>
        label="Mã khoa"
        name="makhoa"
        rules={[{ required: true, message: "Vui lòng chọn MÃ KHOA" }]}
      >
        <AmzSelect size="large" disabled={typeModal === "detail"} />
      </AmzFormItem>
    </AmzModal>
  );
};
