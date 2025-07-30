export function validateForm(dataProps) {
	return Object.values(dataProps).every(value => value.trim().length > 0);
}