import './Form.css';

export function Form({formArt, children}) {
	const cl = formArt === 'search' ? 'search-form' : 'login-form';

	const formSubmit = (e) =>{
		e.preventDefault();

		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
	};

	return (
		<form className={cl} onSubmit={formSubmit}>
			{children}
		</form>
	);
}