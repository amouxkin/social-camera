import { createContext } from "react";

interface UserContextProps {
  name: string;
  setName:(value: string) => void
}

export const UserContext = createContext<Partial<UserContextProps>>({});
