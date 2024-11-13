import { Form } from "antd";
import { AmzButton } from "@/components/Elements/AmzButton";
import { AmzModal } from "@/components/Elements/AmzModal";
import { AmzSpace } from "@/components/Elements/AmzSpace";
import { getModalTitle } from "@/utils/modal/Modal";
import { DataMajor } from "../../index";
import { AmzInput } from "@/components/Elements/AmzInput";
import { AmzFormItem } from "@/components/Elements/AmzForm/AmzFormItem";
import { AmzForm } from "@/components/Elements/AmzForm";
import { AmzSelect } from "@/components/Elements/AmzSelect";
type ModalCRUDProps = {
  open: boolean;
  typeModal: string;
  width: number;
  majorId: number;
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
      <AmzFormItem<DataMajor>
        label="Mã chuyên ngành"
        name="macn"
        rules={[{ required: true, message: "Vui lòng nhập MÃ CHUYÊN NGÀNH" }]}
      >
        <AmzInput disabled={typeModal === "detail"} />
      </AmzFormItem>
      <AmzFormItem<DataMajor>
        label="Tên chuyên ngành"
        name="tencn"
        rules={[{ required: true, message: "Vui lòng nhập TÊN CHUYÊN NGÀNH" }]}
      >
        <AmzInput disabled={typeModal === "detail"} />
      </AmzFormItem>
      <AmzFormItem<DataMajor>
        label="Mã khoa"
        name="makhoa"
        rules={[{ required: true, message: "Vui lòng chọn MÃ KHOA" }]}
      >
        <AmzSelect size="large" disabled={typeModal === "detail"} />
      </AmzFormItem>
    </AmzModal>
  );
};
