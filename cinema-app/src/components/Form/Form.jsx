import './Form.css';

export function Form({formArt,filterItemsFunc,children}) {

	const formSubmit = (e) =>{
		e.preventDefault();

		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);

		if('search-input' in formProps){
			filterItemsFunc(formProps['search-input']);
		}
	};


	const cl = formArt === 'search' ? 'search-form' : 'login-form';

	return (
		<form className={cl} onSubmit={formSubmit}>
			{children}
		</form>
	);
}