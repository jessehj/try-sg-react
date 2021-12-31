export interface UserInfo {
  id: number;
  accountId: string;
  name: string;
  email: string;
  phone: string;
}

export interface LoginInfo {
  id: string;
  password: string;
}

export interface RegisterInfo {
  accountId: string;
  name: string;
  email?: string;
  phone: string;
  password: string;
  cert: string;
}

export interface LoginState {
  data: UserInfo | null;
  loading: boolean;
  error: Error | null;
}
