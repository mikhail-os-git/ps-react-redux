import { useState, useEffect } from 'react';

const INIT = true;

export function useFormValid() {

	const [formValidity, setValidity] = useState(INIT);

	useEffect(() => {

		let timerId;
		if(!formValidity) {
			timerId = setTimeout(() => {
				setValidity(INIT);
			}, 2000);
		}
		return () => {
			if(timerId) {
				clearTimeout(timerId);
			}
		};
	}, [formValidity]);


	const ErrorIfNotValid = (inputRef) => {
		if(!formValidity)
			inputRef.current.focus();
	};

	return [formValidity, setValidity, ErrorIfNotValid];
}