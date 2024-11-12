import {
  loginApi,
  DataLoginReq,
  DataLoginRes,
} from "@/features/admin/views/auth";
import storage from "@/utils/storage/Storage";
import { useNotificationStore } from "@/stores/notification/Notification";
import { messageErorr } from "@/utils/message/Message";
const storageAccountAdmin = import.meta.env.VITE_STORAGE_ACCOUNT_ADMIN;

const handleLoginRes = async (loginRes: DataLoginRes) => {
  if (loginRes) {
    storage.setData(storageAccountAdmin, loginRes);
    return true;
  }
  return false;
};
const Auth = {
  login: async (loginReq: DataLoginReq) => {
    // try {
    //   const res = await loginApi(loginReq);
    //   return res ? await handleLoginRes(res) : false;
    // } catch (error) {
    //   useNotificationStore
    //     .getState()
    //     .addErrorNotification("LOGIN", messageErorr(error));
    //   return false;
    // }
    storage.setData(storageAccountAdmin, "TEST");
    return true;
  },
  isLogin: () => {
    const dataAccount = storage.getData(storageAccountAdmin);
    return dataAccount ? true : false;
  },
  logout: async () => {
    storage.clearData(storageAccountAdmin);
  },
  getData: () => {
    const dataAccount = storage.getData(storageAccountAdmin);
    return dataAccount ? dataAccount : null;
  },
};
export default Auth;
