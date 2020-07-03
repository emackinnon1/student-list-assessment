export const getStudentData = async (url) => {
	const data = await fetch(url);
	return data.json();
};
