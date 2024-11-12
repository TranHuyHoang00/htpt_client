import { Layout } from "../components/Layout";
import { Sider } from "../components/sider/Sider";
import { Menu } from "../components/menu/Menu";
import { Content } from "../components/Content";
import { Dropdown } from "../components/sider/Dropdown";
import { Logo } from "../components/sider/Logo";
import { Header } from "../components/header/Header";
type AdminProps = {
  children: React.ReactNode;
};
export const Admin = ({ children }: AdminProps) => {
  return (
    <Layout hasSider style={{ minHeight: "100vh" }}>
      <Sider>
        <div className="p-[10px]">
          <Logo />
        </div>
        <div className="pl-[10px] pr-[5px] pb-[5px]">
          <Dropdown />
        </div>
        <Menu />
      </Sider>
      <Layout className="bg-[#f5f5f5] overflow-auto h-screen p-[5px] sm:p-[10px] lg:p-[20px]">
        <Header />
        <Content className="bg-white rounded-[5px] overflow-y-auto">
          <div className="p-[10px] lg:p-[20px]">
            <div className="space-y-[20px]">{children}</div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
