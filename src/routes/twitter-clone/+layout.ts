export async function load({ fetch }) {
	const RESPONSE = await fetch('/api/trends');
	const trends = await RESPONSE.json();

	return {
		trends
	};
}
