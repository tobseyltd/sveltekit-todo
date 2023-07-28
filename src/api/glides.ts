import { db } from '@db/index';
import {
	Timestamp,
	doc,
	getDocs,
	query,
	addDoc,
	collection,
	type DocumentData,
	getDoc
} from 'firebase/firestore';

async function fetchGlides() {
	const queryData = query(collection(db, 'glides'));
	const querySnap = await getDocs(queryData);

	const glides = await Promise.all(
		querySnap.docs.map(async (doc: DocumentData) => {
			const glide = doc.data();
			const userSnap = await getDoc(glide.user);

			glide.user = userSnap.data();

			return { ...glide, id: doc.id };
		})
	);

	return { glides };
}

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

export { postGlide, fetchGlides };
