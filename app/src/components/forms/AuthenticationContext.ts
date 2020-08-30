import { createContext, useContext } from "react";

interface AuthenticationContextProps {
  email: string;
  name: string;
  password: string;
  passwordConfirmation: string;
  setEmail(email: any): void;
  setName(newName: any): void;
  setPassword(newPassword: any): void;
  setPasswordConfirmation(newPasswordConfirmation: any): void;
}

export const AuthenticationContext = createContext<
  Partial<AuthenticationContextProps>
>({});

export default AuthenticationContext;

