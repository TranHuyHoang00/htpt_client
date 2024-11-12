import {
  SolutionOutlined,
  AuditOutlined,
  BankOutlined,
  ContainerOutlined,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

export const MenuItem = [
  {
    key: `department/list`,
    icon: <SolutionOutlined />,
    label: "Khoa",
    title: "Khoa",
  },
  {
    key: `major/list`,
    icon: <AuditOutlined />,
    label: "Chuyên ngành",
    title: "Chuyên ngành",
  },
  {
    key: `class/list`,
    icon: <BankOutlined />,
    label: "Lớp",
    title: "Lớp",
  },
  {
    key: `teacher/list`,
    icon: <UserOutlined />,
    label: "Giảng viên",
    title: "Giảng viên",
  },
  {
    key: `student/list`,
    icon: <UserAddOutlined />,
    label: "Sinh viên",
    title: "Sinh viên",
  },
  {
    key: `subject/list`,
    icon: <ContainerOutlined />,
    label: "Môn học",
    title: "Môn học",
  },
];
