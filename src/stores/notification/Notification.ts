import { nanoid } from "nanoid";
import { create } from "zustand";

export type NotificationStoreProps = {
  key?: string;
  type: "info" | "warning" | "success" | "error";
  title?: string | React.ReactNode;
  message?: string | React.ReactNode;
  duration?: number;
};

type NotificationsStore = {
  notifications: NotificationStoreProps[];
  addNotification: (notification: Omit<NotificationStoreProps, "id">) => void;
  addSuccessNotification: (key: string, message: any) => void;
  addWarningNotification: (key: string, message: any) => void;
  addErrorNotification: (key: string, message: any) => void;
  dismissNotification: (key: string) => void;
};

export const useNotificationStore = create<NotificationsStore>((set, get) => ({
  notifications: [],
  addNotification: (notification) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        { key: notification?.key ?? nanoid(), ...notification },
      ],
    })),
  dismissNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter(
        (notification) => notification.key !== id
      ),
    })),
  addSuccessNotification: (key: string, message: any) => {
    get().addNotification({
      type: "success",
      key: key,
      message,
    });
  },
  addErrorNotification: (key: string, message: any) => {
    get().addNotification({
      type: "error",
      key: key,
      message,
    });
  },
  addWarningNotification: (key: string, message: any) => {
    get().addNotification({
      type: "warning",
      key: key,
      message,
    });
  },
}));
