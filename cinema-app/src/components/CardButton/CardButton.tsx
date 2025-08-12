import type { CardButtonProps } from './CardButton.props';
import styles from './CardButton.module.css';
import { Link } from 'react-router-dom';

export function CardButton({children, ...props}: CardButtonProps ){
	return(
		<Link {...props} className={styles['card-button']}>{children}</Link>
	);
}