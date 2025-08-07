import styles from './Button.module.css';

import type { ButtonProps } from './Button.props';
export function Button({children, onClick} : ButtonProps ) {
	return(
		<button className={styles['site-button']} onClick={onClick}>{children}</button>
	);
}