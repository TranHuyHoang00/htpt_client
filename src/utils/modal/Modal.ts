const modalTitles: Record<string, string> = {
  create: "Tạo mới",
  update: "Cập nhật",
  detail: "Chi tiết",
  none: "Không rõ",
};
export const getModalTitle = (typeModal: string): string => {
  return modalTitles[typeModal] || "Không rõ";
};
