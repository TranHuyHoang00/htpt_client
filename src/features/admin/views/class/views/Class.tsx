import { Space, Popconfirm } from "antd";
import { useState } from "react";
import type { TableProps } from "antd";
import { AiFillEdit, AiFillEye, AiFillDelete } from "react-icons/ai";
import { PlusOutlined } from "@ant-design/icons";
import { AmzTable } from "@/components/Elements/AmzTable";
import { AmzButton } from "@/components/Elements/AmzButton";
import { AmzSearch } from "@/components/Elements/AmzInput/AmzSearch";
import { AmzTitle } from "@/components/Elements/AmzTitle";
import { ModalCRUD } from "./modal/ModalCRUD";
export const Class = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [typeModal, setTypeModal] = useState("none");
  const [classId, setDepartmentId] = useState<number>(0);

  const handleOpenModal = (type: string, classId: number) => {
    setIsOpenModal(true);
    setTypeModal(type);
    setDepartmentId(classId);
  };
  const dataClasss = [
    {
      malop: "D19CQCN02-N",
      tenlop: "CÔNG NGHỆ THÔNG TIN 1",
      khoahoc: "CN",
      makhoa: "CNTT1",
    },
  ];
  const columns: TableProps["columns"] = [
    {
      title: "MÃ LỚP",
      dataIndex: "malop",
    },
    {
      title: "TÊN LỚP",
      dataIndex: "tenlop",
    },
    {
      title: "KHÓA HỌC",
      dataIndex: "khoahoc",
    },
    {
      title: "MÃ KHOA",
      dataIndex: "makhoa",
    },
    {
      title: "HĐ",
      width: 80,
      render: (_, item) => (
        <Space size="small">
          <button onClick={() => handleOpenModal("detail", item.makhoa)}>
            <AiFillEye />
          </button>
          <button onClick={() => handleOpenModal("update", item.makhoa)}>
            <AiFillEdit />
          </button>
          <Popconfirm
            title="Xóa dòng này?"
            description="Bạn có chắc muốn xóa dòng này ?"
            okText="Có"
            cancelText="Không"
            placement="topLeft"
          >
            <button>
              <AiFillDelete />
            </button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between">
        <AmzTitle level={4}>LỚP</AmzTitle>
        <AmzButton
          type="primary"
          size="large"
          onClick={() => handleOpenModal("create", 0)}
        >
          <PlusOutlined />
          Thêm mới
        </AmzButton>
      </div>

      <AmzSearch
        size="large"
        placeholder="Nhập tên lớp"
        allowClear
        enterButton="Tìm kiếm"
      />
      <AmzTable
        columns={columns}
        rowKey={"id"}
        size="large"
        dataSource={dataClasss}
      />
      {isOpenModal && (
        <ModalCRUD
          open={isOpenModal}
          onCancel={setIsOpenModal}
          width={600}
          typeModal={typeModal}
          classId={classId}
        />
      )}
    </>
  );
};
