import { Space, Popconfirm } from "antd";
import { useState } from "react";
import type { TableProps } from "antd";
import { AiFillEdit, AiFillEye, AiFillDelete } from "react-icons/ai";
import { PlusOutlined } from "@ant-design/icons";
import { AmzTable } from "@/components/Elements/AmzTable";
import { AmzButton } from "@/components/Elements/AmzButton";
import { AmzSearch } from "@/components/Elements/AmzInput/AmzSearch";
import { AmzTitle } from "@/components/Elements/AmzTitle";
export const Teacher = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dataTeachers = [
    {
      magv: "N19DCCN065",
      ho: "TRẦN",
      ten: "HUY",
      makhoa: "CNTT",
      hocvi: "DH",
      hocham: "GS",
      chuyenmon: "GV",
    },
  ];
  const columns: TableProps["columns"] = [
    {
      title: "MÃ GV",
      dataIndex: "magv",
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
      title: "MÃ KHOA",
      dataIndex: "makhoa",
    },
    {
      title: "HỌC VỊ",
      dataIndex: "hocvi",
    },
    {
      title: "HỌC HÀM",
      dataIndex: "hocham",
    },
    {
      title: "CHUYÊN MÔN",
      dataIndex: "chuyenmon",
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
        <AmzTitle level={4}>GIẢNG VIÊN</AmzTitle>
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
        placeholder="Nhập tên giảng viên"
        allowClear
        enterButton="Tìm kiếm"
      />
      <AmzTable
        columns={columns}
        rowKey={"id"}
        size="large"
        dataSource={dataTeachers}
      />
    </>
  );
};
