import { Header } from "../../components/form/Header";
import { Footer } from "../../components/form/Footer";
import { Layout } from "../../components/Layout";
import { FormLogin } from "./components/FormLogin";
export const Login = () => {
  const listButtonFooter = [
    { title: "Register", href: "/admin/auth/register" },
    { title: "Forgot Password", href: "/admin/auth/forgot-password" },
  ];
  return (
    <Layout>
      <Header title="ADMIN" />
      <FormLogin />
      <Footer listButtonFooter={listButtonFooter} />
    </Layout>
  );
};
