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
	where,
	setDoc
} from 'firebase/firestore';

async function getGlidesFromDocs(qSnapshot: any) {
	return await Promise.all(
		qSnapshot.docs.map(async (doc: { data: () => any; id: any }) => {
			const glide = doc.data();
			const userSnap = await getDoc(glide.user);

			glide.user = userSnap.data();

			return { ...glide, id: doc.id, lookup: doc.ref.path };
		})
	);
}

function onGlidesSnapshot(
	loggedInUser: { following: unknown },
	callback: { (newGlides: any): void; (arg0: any[]): void }
) {
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

async function fetchGlide(uid, id) {
	const userDocRef = doc(db, 'users', uid);
	const userGlideRef = doc(userDocRef, 'glides', id);

	const userGlideSnap = await getDoc(userGlideRef);
	const userGlide = userGlideSnap.data();

	const glideSnap = await getDoc(userGlide.lookup);
	const userSnap = await getDoc(userDocRef);

	const glide = {
		...glideSnap.data(),
		user: userSnap.data(),
		id: glideSnap.id,
		lookup: glideSnap.ref.path
	};

	return glide;
}

async function fetchSubglides() {
	console.log('Fetching Subglides');

	return {
		glidese: [],
		lastGlide: {}
	};
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

async function postGlide(
	glideData: { message: string; uid: string },
	glideLookup
) {
	console.log('Glide should be added to' + glideLookup);

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

	const userGlideRef = doc(userRef, 'glides', newGlide.id);
	await setDoc(userGlideRef, { lookup: newGlide });

	return { ...glide, id: newGlide.id, lookup: newGlide.path };
}

export { postGlide, fetchGlides, onGlidesSnapshot, fetchGlide, fetchSubglides };
