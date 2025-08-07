import styles from'./Paragraph.module.css';
import type { ParagraphProps } from './Paragraph.props';

export function Paragraph({ text, fontSize = '16px' }: ParagraphProps){
	return(
		<p className={styles['site-paragraph']} style={{fontSize: fontSize}}>{text}</p>
	);
}