import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layouts/MainLayout/Layout.tsx';
import { MainPage } from './pages/MainPage/MainPage.tsx';
import { Favorites } from './pages/Favorites/Favorites.tsx';
import { Movie } from './pages/Movie/Movie.tsx';
import { Login } from './pages/Login/Login.tsx';
import { Error } from './pages/Error/Error.tsx';
import { MovieContextProvider, useMovie } from './context/MovieContext/movie.context.tsx';
import axios from 'axios';
import { DETAILS_PREFIX } from './helpers/API.ts';
import type { IMovieDetails } from './types/movie.details';
import { RequireAuth } from './helpers/RequireAuth.tsx';
import { LoginLayout } from './layouts/LoginLayout/LoginLayout.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

const router = createBrowserRouter([
	{
		path:'/',
		element:<RequireAuth><Layout/></RequireAuth>,
		children: [
			{
				path: '/',
				element: <MainPage/>
			},
			{
				path: '/favorites',
				element: <Favorites/>
			}, 
			{
				path: '/movie/:id',
				element: <Movie/>,
				loader:async ({params}) => {
					return await axios.get<IMovieDetails>(DETAILS_PREFIX+params.id).then(res => res.data );
				}
			},
			
		],
	},
	{
			path: '/login',
			element: <LoginLayout/>,
			children: [
				{
					path: '/login',
					element:  <Login/>
				}
			]
		},
	{
		path: '*',
		element: <Error/>
	}
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>

		{/* <MovieContextProvider> */}
		<Provider store={store}>
			<RouterProvider router={router}/>
		</Provider>
		{/* </MovieContextProvider> */}
		{/* <App /> */}
	</StrictMode>
);
