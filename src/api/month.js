import { instance } from './index';

async function fetchMonth() {
	try {
		return await instance.get('/json/calendarInfo.json');
	} catch (error) {
		console.log(error);
	}
}

export default fetchMonth;