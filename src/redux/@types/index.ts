// redux stat type
import { UserType } from "../../pages/LoginPage/@types";

export interface LoginState {
  data: UserType | null;
  isLoading: boolean;
  error: Error | null;
}
