import { createContext } from "react";

interface AuthenticationContextProps {
  isLoading: string;
  setIsLoading(value: boolean): void;
}

export const AuthenticationContext = createContext<
  Partial<AuthenticationContextProps>
>({});

export default AuthenticationContext;

