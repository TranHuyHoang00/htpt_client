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
export const Student = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [typeModal, setTypeModal] = useState("none");
  const [studentId, setDepartmentId] = useState<number>(0);
  const handleOpenModal = (type: string, studentId: number) => {
    setIsOpenModal(true);
    setTypeModal(type);
    setDepartmentId(studentId);
  };
  const dataStudents = [
    {
      masv: "N19DCCN065",
      ho: "TRẦN",
      ten: "HUY",
      phai: "NAM",
      diachi: "119 HCM",
      ngaysinh: "12/01/2001",
      malop: "D19CQCN02-N",
      macn: "CNTT",
    },
  ];
  const columns: TableProps["columns"] = [
    {
      title: "MÃ SV",
      dataIndex: "masv",
    },
    {
      title: "HỌ",
      dataIndex: "ho",
    },
    {
      title: "TÊN",
      dataIndex: "ten",
    },
    {
      title: "PHÁI",
      dataIndex: "phai",
    },
    {
      title: "ĐỊA CHỈ",
      dataIndex: "diachi",
    },
    {
      title: "NGÀY SINH",
      dataIndex: "ngaysinh",
    },
    {
      title: "MÃ LỚP",
      dataIndex: "malop",
    },
    {
      title: "MÃ CN",
      dataIndex: "macn",
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
        <AmzTitle level={4}>SINH VIÊN</AmzTitle>
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
        placeholder="Nhập tên sinh viên"
        allowClear
        enterButton="Tìm kiếm"
      />
      <AmzTable
        columns={columns}
        rowKey={"id"}
        size="large"
        dataSource={dataStudents}
      />
      {isOpenModal && (
        <ModalCRUD
          open={isOpenModal}
          onCancel={setIsOpenModal}
          width={600}
          typeModal={typeModal}
          studentId={studentId}
        />
      )}
    </>
  );
};
