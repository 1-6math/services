import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';
import { store } from './firestore';
import { COLLECTIONS } from './const/collection';

type User = {
	email: string;
	name: string;
	date: Timestamp;
	auth: number;
};

export const checkUser = async ({ email }: { email: string }) => {
	try {
		const userRef = doc(store, COLLECTIONS.USERS, email);
		const userSnap = await getDoc(userRef);

		if (userSnap.exists()) {
			const userData = userSnap.data() as User;
			return userData;
		}
		return null;
	} catch (error) {
		console.error('유저 확인에서 에러가 발생하였습니다.', error);
		return null;
	}
};

export const registerUser = async ({ name, email }: { name: string; email: string }) => {
	try {
		const userRef = doc(store, COLLECTIONS.USERS, email);
		await setDoc(userRef, { name, email, date: new Date(), auth: 4 });
		console.log('등록에 성공하였습니다');
	} catch (error) {
		console.error('유저 등록 과정에서 에러가 발생하였습니다.', error);
	}
};
