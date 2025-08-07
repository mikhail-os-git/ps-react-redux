import { useState, useEffect } from 'react';
import type { RefObject } from 'react';

const INIT = true;

export function useFormValid() {

	const [stateValidity, setValidity] = useState<boolean>(INIT);

	useEffect(() => {

		let timerId: number;
		if(!stateValidity) {
			timerId = setTimeout(() => {
				setValidity(INIT);
			}, 2000);
		}
		return () => {
			if(timerId) {
				clearTimeout(timerId);
			}
		};
	}, [stateValidity]);


	const inputValidation = (inputRef: RefObject<HTMLInputElement>) : void => {
		if(!stateValidity && inputRef.current)
			inputRef.current.focus();
	};

	return {stateValidity, setValidity, inputValidation};
}