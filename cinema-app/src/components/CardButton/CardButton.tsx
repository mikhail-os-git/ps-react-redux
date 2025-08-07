import type { CardButtonProps } from './CardButton.props';
import styles from './CardButton.module.css';

export function CardButton({children}: CardButtonProps ){
	return(
		<button className={styles['card-button']}>{children}</button>
	);
}