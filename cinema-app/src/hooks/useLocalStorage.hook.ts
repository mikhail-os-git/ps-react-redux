import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initValue: T) {
	const [data, setData] = useState<T>(initValue);

	useEffect(() => {
		try {
			const res: string | null = localStorage.getItem(key) 
			if(res){
				const dataFromLS = JSON.parse(res);
					setData(dataFromLS);
			}
		} catch(err) {
			console.log(err);
		}
		
	}, []);

	const saveData = (newData: any): void => {
		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
	};

	return [data, saveData] as const;
}
