import { db } from '@db/index';
import { Timestamp, doc, addDoc, collection } from 'firebase/firestore';

async function postGlide(glideData: { message: string; uid: string }) {
	const userRef = doc(db, 'users', glideData.uid);

	const glide = {
		...glideData,

		user: userRef,
		likesCount: 0,
		subglidesCount: 0,
		date: Timestamp.now()
	};

	const glideCollection = collection(db, 'glides');
	const newGlide = await addDoc(glideCollection, glide);

	return { ...glide, id: newGlide.id };
}

export { postGlide };
