import styles from'./Paragraph.module.css';

export function Paragraph({ text, fontSize }){
	return(
		<p className={styles['site-paragraph']} style={{fontSize: fontSize}}>{text}</p>
	);
}