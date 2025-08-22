import type { ReactNode } from "react";
import type { IItem } from "../../types/item";
import type { IMovie } from "../../types/movie";

export interface IMovieContextProvider {
	children: ReactNode
}

export interface IMovieContext {
	items: IMovie[] | null,
	loading: boolean,
	search(name: string): void
}