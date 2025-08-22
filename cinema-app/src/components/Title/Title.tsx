import styles from'./Title.module.css';
import type { TitleProps } from './Title.props';
export function Title({text} : TitleProps){
	return(
		<h1 className={styles['site-title']}>{text}</h1>
	);
}