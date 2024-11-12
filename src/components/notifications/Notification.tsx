import { notification } from "antd";
import { useEffect } from "react";
import {
  NotificationStoreProps,
  useNotificationStore,
} from "@/stores/notification/Notification";
export const Notifications = () => {
  const notifications = useNotificationStore((state) => state.notifications);
  const dismissNotification = useNotificationStore(
    (state) => state.dismissNotification
  );
  const [api, contextHolder] = notification.useNotification({});
  const openNotificationWithIcon = (
    notificationItem: NotificationStoreProps
  ) => {
    api.open({
      key: notificationItem.key,
      message: notificationItem.title,
      description: notificationItem.message,
      placement: "bottomRight",
      type: notificationItem.type,
      duration: notificationItem.duration ?? 4.5,
    });
  };
  useEffect(() => {
    notifications.map((notification) => {
      openNotificationWithIcon(notification);
      dismissNotification(notification.key!);
    });
  });

  return <>{contextHolder}</>;
};
