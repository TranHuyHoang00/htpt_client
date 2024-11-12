export const messageErorr = (error: any) => {
  return error?.response?.data?.message ?? error?.message ?? "System Error";
};
