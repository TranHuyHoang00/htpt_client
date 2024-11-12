import { Header } from "../../components/form/Header";
import { Footer } from "../../components/form/Footer";
import { FormRegister } from "./components/FormRegister";
import { Layout } from "../../components/Layout";

export const Register = () => {
  const listButtonFooter = [
    { title: "Login", href: "/admin/auth/login" },
    { title: "Forgot Password", href: "/admin/auth/forgot-password" },
  ];
  return (
    <Layout>
      <Header title="Register" />
      <FormRegister />
      <Footer listButtonFooter={listButtonFooter} />
    </Layout>
  );
};
