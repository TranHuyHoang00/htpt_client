import { notification } from "antd";
import { NotificationStoreProps } from "@/stores/notification/Notification";

const [api] = notification.useNotification();
export const addNotification = ({
  type = "success",
  title,
  message = "",
}: NotificationStoreProps) => {
  api[type]({
    message: title,
    description: message,
  });
};
