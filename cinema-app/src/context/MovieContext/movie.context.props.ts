import type { ReactNode } from "react";
import type { IItem } from "../../types/item";

export interface IMovieContextProvider {
	children: ReactNode
}

export interface IMovieContext {
	items: IItem[],
	filterItems(args: string): void,
	findByIndex(id: number): IItem | undefined,
	getFavorites(): IItem[] | undefined,
	reset(): void
}