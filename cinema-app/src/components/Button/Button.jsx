import styles from'./Button.module.css';

export function Button({text, onClick}) {
	return(
		<button className={styles['site-button']} onClick={onClick}>{text}</button>
	);
}