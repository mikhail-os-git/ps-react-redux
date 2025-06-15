import './App.css';
import {Title} from './components/Title/Title';
import { Paragraph } from './components/Paragraph/Paragraph';
import {Button} from './components/Button/Button';

function App() {
	return (
		<>
			<div className="search">

				<Title text="Поиск"/>
				<Paragraph fontSize = "16px" text = "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."/>
				<Button text="Искать"/>
			</div>
		</>
	);
}

export default App;
