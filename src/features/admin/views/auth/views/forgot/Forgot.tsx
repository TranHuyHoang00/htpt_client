import { Header } from "../../components/form/Header";
import { Footer } from "../../components/form/Footer";
import { FormForgot } from "./components/FormForgot";
import { Layout } from "../../components/Layout";
export const Forgot = () => {
  const listButtonFooter = [
    { title: "Login", href: "/admin/auth/login" },
    { title: "Register", href: "/admin/auth/register" },
  ];
  return (
    <Layout>
      <Header title="Forgot Password" />
      <FormForgot />
      <Footer listButtonFooter={listButtonFooter} />
    </Layout>
  );
};
