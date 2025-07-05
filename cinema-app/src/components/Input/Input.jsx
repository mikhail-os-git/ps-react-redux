import styles from './Input.module.css';
import cn from 'classnames';
export function Input({inputType, text}) {

	const isSearch = inputType === 'search';
	const name = isSearch ? 'search-input' :'login-input';

	const searchIcon = '/public/search/search-icon.svg';
	return (
		<input type="text" name={name} className={cn(styles['site-input'],styles[name])} placeholder={text} style={isSearch ? { background: `url(${searchIcon}) no-repeat center left 16px`}: {}}/>
	);
}