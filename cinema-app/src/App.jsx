import { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search';
import { CardList } from './components/CardList/CardList';

function App() {

	const filterItems = itemName => {
		setSearchItems(oldItems => [...oldItems].filter(i =>i.name === itemName));
	};

	

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

	const [cardItems, setSearchItems] = useState(INIT_DATA);
	

	return (
		
		<>
			<Header/>
			<main className="main">
				<Search filterItemsFunc={filterItems}/>
				<CardList items={cardItems}/>
			</main>
		</>
	);
}

export default App;
