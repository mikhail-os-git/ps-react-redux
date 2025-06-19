import './Button.css';

export function Button({text, onClick}) {
	return(
		<button className="site-button" onClick={onClick}>{text}</button>
	);
}