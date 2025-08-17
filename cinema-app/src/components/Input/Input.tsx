import { forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';
import type { InputProps } from './Input.props';


// export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({inputType = '', text = '', ...props}, ref) {

// 	const isSearch = inputType === 'search';

// 	const name = isSearch ? 'search-input' : 'login-input';

// 	return (
// 		<input {...props} name={name} ref = {ref} className={cn(styles['input'], {
// 			[styles['input_search']]: isSearch
// 		})} placeholder={text} required/>
		
// 	);
// });

export function Input({inputType = '', text = '', ...props}) {

	const isSearch = inputType === 'search';

	const name = isSearch ? 'search-input' : 'login-input';

	return (
		<input {...props} name={name} className={cn(styles['input'], {
			[styles['input_search']]: isSearch
		})} placeholder={text} required/>
		
	);
};