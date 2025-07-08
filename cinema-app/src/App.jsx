import { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search';
import { CardList } from './components/CardList/CardList';
import {useLocalStorage} from './hooks/useLocalStorage.hook';
import { Login } from './components/Login/Login';


const INIT_DATA = [
	{
		id: 1,
		name: 'Black Widow',
		rating: 324,
		favorite: false,
		image: '../public/cardlist/card-imgs/Black Widow.png'
	},
	{
		id: 2,
		name: 'Shang Chi',
		rating: 124,
		favorite: false,
		image: '../public/cardlist/card-imgs/Shang Chi.png'
	},
	{
		id: 3,
		name: 'Loki',
		rating: 234,
		favorite: false,
		image: '../public/cardlist/card-imgs/Loki.png'
	},
	{
		id: 4,
		name: 'How I Met Your Mother',
		rating: 123,
		favorite: false,
		image: '../public/cardlist/card-imgs/How I Met Your Mother.png'
	},
	{
		id: 5,
		name: 'Money Heist',
		rating: 8125,
		favorite: true,
		image: '../public/cardlist/card-imgs/Money Heist.png'
	},
	{
		id: 6,
		name: 'Friends',
		rating: 123,
		favorite: false,
		image: '../public/cardlist/card-imgs/Friends.png'
	},
	{
		id: 7,
		name: 'The Big Bang Theory',
		rating: 12,
		favorite: false,
		image: '../public/cardlist/card-imgs/The Big Bang Theory.png'
	},
	{
		id: 8,
		name: 'Two And a Half Men',
		rating: 12,
		favorite: false,
		image: '../public/cardlist/card-imgs/Two And a Half Men.png'
	}
];

function App() {
	const [users, saveUsers] = useLocalStorage('data');
	const [cardItems, setSearchItems] = useState(INIT_DATA);


	const filterItems = (itemName) => {
		setSearchItems(oldItems => [...oldItems].filter(i =>i.name === itemName));
	};

	const filterUsers = (userName) => {
		const updated = users.map(user =>
			user.username.toLowerCase() === userName.toLowerCase() ? { ...user, isLogined: true } : user
		);
		saveUsers(updated);
	};

	const userLogout = () => {
		const logout = users.map(user => ({
			...user,
			isLogined: false
		}));
		saveUsers(logout);
	};

	const actionsChoice = (typeAct, value) =>{
		switch (typeAct) {
		case 'SEARCH_ITEM': {
			filterItems(value);
			break;
		}
		case 'SEARCH_USER':{
			filterUsers(value);
			break;
		}
		default:
			console.warn(`Unknown action: ${typeAct}`);
			break;
		}
	};

	return (
		
		<>
			<Header dataUsers={users} onClick={userLogout}/>
			<main className="main">
				<Search actionFunc={actionsChoice}/>
				<CardList items={cardItems}/>
				<Login actionFunc={actionsChoice}/>
			</main>
		</>
	);
}

export default App;
