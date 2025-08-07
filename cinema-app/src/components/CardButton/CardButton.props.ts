import type { ButtonHTMLAttributes,ReactNode } from "react";

export interface CardButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}