export function validateForm(dataProps: {[key:string]: string}): boolean {
	return Object.values(dataProps).every((value: string)  => value.trim().length > 0);
}