import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
export const formatDate = (date: string) => {
  return dayjs.utc(date).format("HH:mm - DD/MM/YYYY");
};
