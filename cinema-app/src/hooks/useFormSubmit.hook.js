import { useFormValid } from './useFormValid.hook';

export function useFormSubmit({ onValidate, onSuccess, inputRef }) {
	const [formValidity, setValidity, inputValidation] = useFormValid(inputRef);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		const isValid = onValidate(formProps);
		setValidity(isValid);
		inputValidation(isValid);

		if (!isValid) return;
		onSuccess(Object.values(formProps).join());
		inputRef.current.value = '';
	};

	return { formValidity, handleSubmit };
}
