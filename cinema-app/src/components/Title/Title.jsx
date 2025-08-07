import styles from'./Title.module.css';

export function Title({text}){
	return(
		<h1 className={styles['site-title']}>{text}</h1>
	);
}