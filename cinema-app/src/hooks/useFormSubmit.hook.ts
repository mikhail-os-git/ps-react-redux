import { useFormValid } from './useFormValid.hook';
import type {RefObject} from 'react';

//#region old with custom validation
// export interface IUseFormSubmitProps {
// 	inputRef: RefObject<HTMLInputElement>;
// 	onValidate(args: {[k: string]: FormDataEntryValue}): boolean;
// 	onSuccess(args: string): void;
// }

// export function useFormSubmit({ onValidate, onSuccess, inputRef }: IUseFormSubmitProps) {
// 	const {stateValidity, setValidity, inputValidation} = useFormValid();

// 	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();
// 		const formData = new FormData(e.target as HTMLFormElement);
// 		const formProps = Object.fromEntries(formData);
// 		const isValid = onValidate(formProps);
// 		setValidity(isValid);
// 		if(inputRef.current)
// 			inputValidation(inputRef);

// 		if (!isValid) return;
// 		onSuccess(Object.values(formProps).join());
// 		if(inputRef.current)
// 			inputRef.current.value = '';
// 	};

// 	return { stateValidity, handleSubmit };
// }
//#endregion

export interface IUseFormSubmitProps {
	onSuccess(args: string): void;
}

export function useFormSubmit({onSuccess }: IUseFormSubmitProps) {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const formProps = Object.fromEntries(formData);
		onSuccess(Object.values(formProps).join());
	};

	return { handleSubmit };
}