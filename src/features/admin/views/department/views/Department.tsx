import { Space, Popconfirm } from "antd";
import { useState } from "react";
import type { TableProps } from "antd";
import { AiFillEdit, AiFillEye, AiFillDelete } from "react-icons/ai";
import { PlusOutlined } from "@ant-design/icons";
import { AmzTable } from "@/components/Elements/AmzTable";
import { AmzButton } from "@/components/Elements/AmzButton";
import { AmzSearch } from "@/components/Elements/AmzInput/AmzSearch";
import { AmzTitle } from "@/components/Elements/AmzTitle";
export const Department = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dataDepartments = [
    {
      makhoa: "CNTT1",
      tenkhoa: "CÔNG NGHỆ THÔNG TIN 1",
      matruongkhoa: "DH01",
    },
  ];
  const columns: TableProps["columns"] = [
    {
      title: "MÃ KHOA",
      dataIndex: "makhoa",
    },
    {
      title: "TÊN KHOA",
      dataIndex: "tenkhoa",
    },
    {
      title: "MÃ TRƯỞNG KHOA",
      dataIndex: "matruongkhoa",
    },
    {
      title: "HĐ",
      width: 80,
      render: (_, item) => (
        <Space size="small">
          <button onClick={() => setIsOpenModal(true)}>
            <AiFillEye />
          </button>
          <button onClick={() => setIsOpenModal(true)}>
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
        <AmzTitle level={4}>KHOA</AmzTitle>
        <AmzButton
          type="primary"
          size="large"
          onClick={() => setIsOpenModal(true)}
        >
          <PlusOutlined />
          Thêm mới
        </AmzButton>
      </div>

      <AmzSearch
        size="large"
        placeholder="Nhập tên khoa"
        allowClear
        enterButton="Tìm kiếm"
      />
      <AmzTable
        columns={columns}
        rowKey={"id"}
        size="large"
        dataSource={dataDepartments}
      />
    </>
  );
};
