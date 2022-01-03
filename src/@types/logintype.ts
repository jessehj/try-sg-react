export interface UserType {
  id: number;
  accountId: string;
  name: string;
  email?: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginResType {
  row: UserType;
}

export interface LoginReqType {
  accountId: string;
  password: string;
}

export interface RegisterResType {
  accountId: string;
  name: string;
  email?: string;
  phone: string;
  password: string;
  cert: string;
}

export interface LoginState {
  data: UserType | null;
  isLoading: boolean;
  error: Error | null;
}
