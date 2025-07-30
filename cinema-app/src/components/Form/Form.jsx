//#region old Form
// export function Form({formType, actionFunc, inputText, buttonText}) {	
// 	const inputRef = useRef();

// 	const inputInvalid = (isValid) => {
// 		if(!isValid) {
// 			inputRef.current.focus();
// 		}
// 	};
// 	const [formState, setValidity] = useState({target: true});



// 	useEffect(() => {
// 		let timerId;
// 		if(!formState.target) {
// 			inputInvalid(formState.target);
// 			timerId = setTimeout(() => {
// 				setValidity(true);
// 			}, 2000);
// 		}
// 		return () => {
// 			if(timerId) {
// 				clearTimeout(timerId);
// 			}
// 		};
// 	},[formState]);

// 	const cl = formType === 'search' ? 'form_search' : 'form_login';


// 	const formSubmit = (e) =>{
// 		e.preventDefault();
		
// 		const formData = new FormData(e.target);
// 		const formProps = Object.fromEntries(formData);

// 		let isValid = Object.values(formProps).every(value => value.length !== 0);
// 		setValidity(fs => ({...fs,target:isValid}));
// 		if(!isValid) {
// 			return;
// 		}
// 		if('search-input' in formProps){
// 			actionFunc('SEARCH_ITEM',formProps['search-input']);
// 		}

// 		if('login-input' in formProps){
// 			actionFunc('SEARCH_USER',formProps['login-input']);
// 		}

// 		inputRef.current.value = '';
// 	};

// 	return (
// 		<form className={cn(styles['form'], styles[cl])} onSubmit={formSubmit}>
// 			<Input ref={inputRef} type="text" isValid={formState.target} inputType={formType} text={inputText}/>
// 			<Button text={buttonText}/>
// 		</form>
// 	);
// }
//#endregion

export function Form({ children ,...props}) {	
	return (
		<form {...props}>
			{children}
		</form>
	);
}