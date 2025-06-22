import './Input.css';

export function Input({inputArt, text}) {

	const isSearch = inputArt == 'search';

	const name = isSearch ? 'search-input' :'login-input';
	const iconPath = '../../../public/search/search-icon.svg';

	return (
		<input type="text" name={name} className={'site-input ' + name} placeholder={text} style={isSearch ? { background: `url(${iconPath}) no-repeat center left 16px`}: {}}/>
	);
}