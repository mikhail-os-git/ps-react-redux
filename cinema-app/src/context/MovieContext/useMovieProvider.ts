import { useState } from "react";
import type { IMovieContext } from "./movie.context.props";
import type{ IItem } from "../../types/item";
import type { IMovie } from "../../types/movie";
import axios, { AxiosError } from "axios";
import { SEARCH_PREFIX } from "../../helpers/API";

export interface ApiResponse {
	"#TITLE": string
	"#YEAR": number
	"#IMDB_ID": string
	"#RANK": number
	"#ACTORS": string
	"#AKA": string
	"#IMDB_URL": string
	"#IMDB_IV": string
	"#IMG_POSTER": string
	photo_width: number
	photo_height: number
}

const mapItems = (data: ApiResponse[]): IMovie[] => {
		if(!data.length) {
			return []
		}
		
		const movieData: IMovie[] = data.map((movie,index) => {return {...movie, id: index + 1, favorite: false, title: movie["#TITLE"], year: movie["#YEAR"], imdbId: movie["#IMDB_ID"], rank: movie["#RANK"], actors: movie["#ACTORS"], aka: movie["#AKA"], imdbUrl: movie["#IMDB_URL"], imdbIv: movie["#IMDB_IV"], imgPoster: movie["#IMG_POSTER"]}});

		return movieData
	}	

export function useMovieProvider(): IMovieContext {
	const [items, setCardItems] = useState<IMovie[] | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const search = async (name: string) => {
		try {
			setLoading(true);
			await new Promise(resolve => setTimeout(resolve, 2000));

			const { data } = await axios.get<{ ok: boolean, description:ApiResponse[], error_code: number}>(
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

