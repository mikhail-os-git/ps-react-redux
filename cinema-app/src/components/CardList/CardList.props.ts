import type { IItem } from "../../types/item";
import type { IMovie } from "../../types/movie";

export interface CardListProps {
	items: IMovie[] | null,
	loading?: boolean
}