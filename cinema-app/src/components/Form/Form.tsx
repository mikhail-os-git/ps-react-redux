import type {FormProps} from './Form.props';
export function Form({ children ,...props}: FormProps) {	
	return (
		<form {...props}>
			{children}
		</form>
	);
}