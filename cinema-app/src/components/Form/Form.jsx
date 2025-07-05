import styles from './Form.module.css';

export function Form({formType,filterItemsFunc,children}) {

	const formSubmit = (e) =>{
		e.preventDefault();

		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);

		if('search-input' in formProps){
			filterItemsFunc(formProps['search-input']);
		}
	};
	const cl = formType === 'search' ? 'search-form' : 'login-form';

	return (
		<form className={styles[cl]} onSubmit={formSubmit}>
			{children}
		</form>
	);
}