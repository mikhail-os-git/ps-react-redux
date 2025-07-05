import styles from './CardButton.module.css';

export function CardButton({children}){
	return(
		<button className={styles['card-button']}>{children}</button>
	);
}