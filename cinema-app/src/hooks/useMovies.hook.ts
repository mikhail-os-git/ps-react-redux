import { useDispatch, useSelector } from "react-redux";
import { movieActions, search } from "../store/movie.slice";
import type { AppDispatch, RootState } from "../store/store";

export function useMovies() {
	const dispatch = useDispatch<AppDispatch>();
	const movies = useSelector((state: RootState) => state.movie.movies);
	const favorites = useSelector((state: RootState) => state.movie.favorites);
	const loading = useSelector((state: RootState) => state.movie.loading);
	const error = useSelector((state: RootState) => state.movie.error);

	const add = (id: number) => dispatch(movieActions.addFavorit(id));
	const remove = (id: number) => dispatch(movieActions.removeFavorit(id));
	const doSearch = (name: string) => dispatch(search({ name }));
	return { movies, favorites, loading, error, add, remove, doSearch };
}