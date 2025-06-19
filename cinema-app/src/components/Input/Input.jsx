import { useState } from 'react';
import './Input.css';

export function Input({inputArt, text}) {

	const isSearch = inputArt == 'search';

	const name = isSearch ? 'search-input' :'login-input';
	const iconPath = '../../../public/search/search-icon.svg';
	
	const [changes, setChanges] = useState('');

	const onChange = (event)=>{
		const targ = event.target;
		setChanges(targ.value);
		console.log(changes);
	};
	return (
		<input type="text" name={name} className={'site-input ' + name} onChange={onChange} placeholder={text} style={isSearch ? { background: `url(${iconPath}) no-repeat center left 16px`}: {}}/>
	);
}