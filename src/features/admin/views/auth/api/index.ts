import AxiosAD from "@/lib/api-handler/axios";
import { DataLoginRes, DataLoginReq } from "../index";

export const loginApi = (data: DataLoginReq): Promise<DataLoginRes> => {
  return AxiosAD.post("/auth/api/v1/token", data);
};
