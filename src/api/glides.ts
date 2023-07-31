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
	onSnapshot,
	limit,
	startAfter,
	where
} from 'firebase/firestore';

async function getGlidesFromDocs(qSnapshot: any) {
	return await Promise.all(
		qSnapshot.docs.map(async (doc) => {
			const glide = doc.data();
			const userSnap = await getDoc(glide.user);

			glide.user = userSnap.data();

			return { ...glide, id: doc.id };
		})
	);
}

function onGlidesSnapshot(loggedInUser, callback) {
	const watchCollection = collection(db, 'glides');

	const constraints = [
		where('date', '>', Timestamp.now()),
		where('user', 'in', loggedInUser.following)
	];

	const q = query(watchCollection, ...constraints);

	return onSnapshot(q, async (querySnapshot) => {
		const glides = await getGlidesFromDocs(querySnapshot);
		callback(glides);
	});
}

async function fetchGlides(lastDocGlide: GlideProps, loggedInUser: any) {
	const _loggedInUSerRef = doc(db, 'users', loggedInUser.uid);
	const constraints: any = [orderBy('date', 'desc'), limit(10)];

	if (loggedInUser.following.length > 0) {
		constraints.push(
			where('user', 'in', [...loggedInUser.following, _loggedInUSerRef])
		);
	} else {
		constraints.push(where('user', '==', _loggedInUSerRef));
	}

	if (lastDocGlide) {
		constraints.push(startAfter(lastDocGlide));
	}

	const queryData = query(collection(db, 'glides'), ...constraints);
	const querySnap = await getDocs(queryData);

	const lastGlide = querySnap.docs[querySnap.docs.length - 1];

	const glides = await getGlidesFromDocs(querySnap);

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

export { postGlide, fetchGlides, onGlidesSnapshot };
