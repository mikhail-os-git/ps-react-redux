import { useState, useEffect } from 'react';

export function useLocalStorage(key) {
	const [data, setData] = useState([]);

	useEffect(() => {
		try {
			const dataFromLS = JSON.parse(localStorage.getItem(key));
			if(dataFromLS){
				setData(dataFromLS);
			}
		} catch(err) {
			console.log(err);
		}
		
	}, []);

	const saveData = (newData) => {
		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
	};

	return [data, saveData];
}
