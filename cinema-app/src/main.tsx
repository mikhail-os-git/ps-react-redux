import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './pages/Layout/Layout.tsx';
import { MainPage } from './pages/MainPage/MainPage.tsx';
import { Favorites } from './pages/Favorites/Favorites.tsx';
import { Movie } from './pages/Movie/Movie.tsx';
import { Login } from './pages/Login/Login.tsx';
import { Error } from './pages/Error/Error.tsx';
import { MovieContextProvider } from './context/MovieContext/movie.context.tsx';

const router = createBrowserRouter([
	{
		path:'/',
		element:<Layout/>,
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
				element: <Movie/>
			},
			{
				path: '/login',
				element: <Login/>
			}
		],
	},
	{
		path: '*',
		element: <Error/>
	}
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MovieContextProvider>
			<RouterProvider router={router}/>
		</MovieContextProvider>
		{/* <App /> */}
	</StrictMode>
);
