import { createContext, useContext } from "react";
import type { IMovieContext, IMovieContextProvider } from "./movie.context.props";
import { useMovieProvider } from './useMovieProvider';

export const MovieContext = createContext<IMovieContext | null>(null);

export const MovieContextProvider = ({ children }: IMovieContextProvider) => {
	const value = useMovieProvider();

	return (
    <MovieContext.Provider value={value}>
    	{children}
    </MovieContext.Provider>
	);
};

export function useMovie() {
	const context = useContext(MovieContext);
	if (!context) {
    	throw new Error("Контекст пуст, проверь обернуты ли компоненты в провайдер");
	}
	return context;
}