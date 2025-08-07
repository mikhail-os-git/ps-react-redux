import { forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';
export const Input = forwardRef(function Input({inputType, text, isValid = true, ...props}, ref) {

	const isSearch = inputType === 'search';

	const name = isSearch ? 'search-input' : 'login-input';

	return (
		<input {...props} name={name} ref = {ref} className={cn(styles['input'], {
			[styles['input_search']]: isSearch,
			[styles['invalid']]: !isValid
		})} placeholder={text}/>
	);
});