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


// export function useLocalStorage(key, defaultValue = []) {
// 	const [data, setData] = useState(() => {
// 		try {
// 			const stored = localStorage.getItem(key);
// 			if (!stored) {
// 				// ничего нет в localStorage — вернём дефолт
// 				return defaultValue;
// 			}
// 			return JSON.parse(stored);
// 		} catch (err) {
// 			console.error('Ошибка чтения JSON из localStorage:', err);
// 			return defaultValue;
// 		}
// 	});

// 	const saveData = (newData) => {
// 		try {
// 			localStorage.setItem(key, JSON.stringify(newData));
// 			setData(newData);
// 		} catch (err) {
// 			console.error('Ошибка записи в localStorage:', err);
// 		}
// 	};

// 	return [data, saveData];
// }
