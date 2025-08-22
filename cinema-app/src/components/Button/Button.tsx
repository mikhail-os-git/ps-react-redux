import styles from './Button.module.css';

import type { ButtonProps } from './Button.props';
export function Button({children, onClick, ...props} : ButtonProps ) {
	return(
		<button className={styles['site-button'] }  onClick={onClick} {...props}>{children}</button>
	);
}