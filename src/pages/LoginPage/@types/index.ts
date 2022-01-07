export interface UserType {
  id: number;
  accountId: string;
  name: string;
  email?: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginReqType {
  accountId: string;
  password: string;
}

export interface LoginResType {
  row: UserType;
}
