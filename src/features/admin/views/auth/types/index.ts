export type DataLoginReq = {
  phone: string;
  password: string;
};

export type DataLoginRes = {
  data: {
    access: string;
    refresh: string;
    user: {
      full_name: string;
      id: number;
      phone: string;
    };
  };
  success: 1;
};
