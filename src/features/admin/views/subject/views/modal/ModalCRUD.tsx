import { Form } from "antd";
import { AmzButton } from "@/components/Elements/AmzButton";
import { AmzModal } from "@/components/Elements/AmzModal";
import { AmzSpace } from "@/components/Elements/AmzSpace";
import { getModalTitle } from "@/utils/modal/Modal";
import { DataSubject } from "../../index";
import { AmzInput } from "@/components/Elements/AmzInput";
import { AmzFormItem } from "@/components/Elements/AmzForm/AmzFormItem";
import { AmzForm } from "@/components/Elements/AmzForm";
import { AmzSelect } from "@/components/Elements/AmzSelect";
import { AmzInputNumber } from "@/components/Elements/AmzInput/AmzInputNumber";
type ModalCRUDProps = {
  open: boolean;
  typeModal: string;
  width: number;
  subjectId: number;
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
      <AmzFormItem<DataSubject>
        label="Mã môn học"
        name="mamh"
        rules={[{ required: true, message: "Vui lòng nhập MÃ MÔN HỌC" }]}
      >
        <AmzInput disabled={typeModal === "detail"} />
      </AmzFormItem>
      <AmzFormItem<DataSubject>
        label="Tên môn học"
        name="tenmonhoc"
        rules={[{ required: true, message: "Vui lòng nhập TÊN MÔN HỌC" }]}
      >
        <AmzInput disabled={typeModal === "detail"} />
      </AmzFormItem>
      <AmzFormItem<DataSubject>
        label="Số tiết LT"
        name="sotietlt"
        rules={[{ required: true, message: "Vui lòng nhập SỐ TIẾT LT" }]}
      >
        <AmzInputNumber disabled={typeModal === "detail"} />
      </AmzFormItem>
      <AmzFormItem<DataSubject>
        label="Số tiết TH"
        name="sotietth"
        rules={[{ required: true, message: "Vui lòng nhập SỐ TIẾT TH" }]}
      >
        <AmzInputNumber disabled={typeModal === "detail"} />
      </AmzFormItem>
    </AmzModal>
  );
};
