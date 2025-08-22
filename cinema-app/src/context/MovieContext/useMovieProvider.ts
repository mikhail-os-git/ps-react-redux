import { useState } from "react";
import type { IMovieContext } from "./movie.context.props";
import type{ IItem } from "../../types/item";
import type { IMovie } from "../../types/movie";
import axios, { AxiosError } from "axios";
import { SEARCH_PREFIX } from "../../helpers/API";

const mapItems = (data: IMovie[]): IMovie[] => {
		if(!data.length) {
			return []
		}
		return data.map((movie,index) => {return {...movie, id: index + 1, favorite: false}})
	}	

export function useMovieProvider(): IMovieContext {
	const [items, setCardItems] = useState<IMovie[] | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const search = async (name: string) => {
		try {
			setLoading(true);
			await new Promise(resolve => setTimeout(resolve, 2000));

			const { data } = await axios.get<{ ok: boolean, description:IMovie[], error_code: number}>(
			SEARCH_PREFIX + name
			);
			setCardItems(mapItems(data['description']));
			setLoading(false);

		} catch (er) {
			if(er instanceof AxiosError) {
				console.error(er.message);
			}
		}

	} 

	return { items, loading, search };
}

