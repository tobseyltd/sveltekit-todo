import type { GlideProps } from '$lib/stores/createGlideStore';
import { db } from '@db/index';
import {
	Timestamp,
	doc,
	getDocs,
	query,
	addDoc,
	collection,
	getDoc,
	orderBy,
	limit,
	startAfter
} from 'firebase/firestore';

async function fetchGlides(lastDocGlide: GlideProps) {
	const constraints: any = [orderBy('date', 'desc'), limit(10)];

	if (lastDocGlide) constraints.push(startAfter(lastDocGlide));

	const queryData = query(collection(db, 'glides'), ...constraints);
	const querySnap = await getDocs(queryData);

	const lastGlide = querySnap.docs[querySnap.docs.length - 1];

	const glides = await Promise.all(
		querySnap.docs.map(async (doc) => {
			const glide = doc.data();
			const userSnap = await getDoc(glide.user);

			glide.user = userSnap.data();

			return { ...glide, id: doc.id };
		})
	);

	return { glides, lastGlide };
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
