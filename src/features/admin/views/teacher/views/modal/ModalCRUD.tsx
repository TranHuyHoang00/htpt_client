import { Form } from "antd";
import { AmzButton } from "@/components/Elements/AmzButton";
import { AmzModal } from "@/components/Elements/AmzModal";
import { AmzSpace } from "@/components/Elements/AmzSpace";
import { getModalTitle } from "@/utils/modal/Modal";
import { DataTeacher } from "../../index";
import { AmzInput } from "@/components/Elements/AmzInput";
import { AmzFormItem } from "@/components/Elements/AmzForm/AmzFormItem";
import { AmzForm } from "@/components/Elements/AmzForm";
import { AmzSelect } from "@/components/Elements/AmzSelect";
type ModalCRUDProps = {
  open: boolean;
  typeModal: string;
  width: number;
  teacherId: number;
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
      <AmzFormItem<DataTeacher>
        label="Mã giảng viên"
        name="magv"
        rules={[{ required: true, message: "Vui lòng nhập MÃ GIẢNG VIÊN" }]}
      >
        <AmzInput disabled={typeModal === "detail"} />
      </AmzFormItem>
      <AmzFormItem<DataTeacher>
        label="Họ"
        name="ho"
        rules={[{ required: true, message: "Vui lòng nhập HỌ" }]}
      >
        <AmzInput disabled={typeModal === "detail"} />
      </AmzFormItem>
      <AmzFormItem<DataTeacher>
        label="Tên"
        name="ten"
        rules={[{ required: true, message: "Vui lòng nhập TÊN" }]}
      >
        <AmzInput disabled={typeModal === "detail"} />
      </AmzFormItem>
      <AmzFormItem<DataTeacher>
        label="Mã khoa"
        name="makhoa"
        rules={[{ required: true, message: "Vui lòng chọn MÃ KHOA" }]}
      >
        <AmzSelect size="large" disabled={typeModal === "detail"} />
      </AmzFormItem>
      <AmzFormItem<DataTeacher>
        label="Học vị"
        name="hocvi"
        rules={[{ required: true, message: "Vui lòng chọn HỌC VỊ" }]}
      >
        <AmzSelect size="large" disabled={typeModal === "detail"} />
      </AmzFormItem>
      <AmzFormItem<DataTeacher>
        label="Học hàm"
        name="hocham"
        rules={[{ required: true, message: "Vui lòng chọn HỌC HÀM" }]}
      >
        <AmzSelect size="large" disabled={typeModal === "detail"} />
      </AmzFormItem>
      <AmzFormItem<DataTeacher>
        label="Chuyên môn"
        name="chuyenmon"
        rules={[{ required: true, message: "Vui lòng chọn CHUYÊN MÔN" }]}
      >
        <AmzSelect size="large" disabled={typeModal === "detail"} />
      </AmzFormItem>
    </AmzModal>
  );
};
