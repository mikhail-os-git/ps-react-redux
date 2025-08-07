import type{ ReactNode } from "react";
import type { IUser } from "../types/user";

export interface IUserContextProps {
	children: ReactNode
}

export interface IUserContext {
  user: IUser | null;
  filter: (userName: string) => void;
  logout: () => void;
}