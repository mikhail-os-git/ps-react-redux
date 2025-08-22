import type { ReactNode } from "react";
import type { LinkProps } from "react-router-dom";

export interface CardButtonProps extends LinkProps {
	children: ReactNode
}