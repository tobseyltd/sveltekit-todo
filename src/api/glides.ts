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
	setDoc,
	updateDoc,
	increment
} from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

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

async function uploadImage(image) {
	const storage = getStorage();
	const storageRef = ref(storage, image.name);

	const uploadResult = await uploadBytes(storageRef, image.buffer);
	const downloadUrl = await getDownloadURL(uploadResult.ref);
	return downloadUrl;
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

async function fetchSubglides(lastGlideDoc, glideLookup) {
	const ref = doc(db, glideLookup);
	const glidesCollection = collection(ref, 'glides');

	const constraints = [orderBy('date', 'desc'), limit(10)];

	const q = query(glidesCollection, ...constraints);
	const qSnapshot = await getDocs(q);

	const _lastGlideDoc = qSnapshot.docs[qSnapshot.docs.length - 1];
	const glides = await getGlidesFromDocs(qSnapshot);

	if (lastGlideDoc) {
		constraints.push(startAfter(lastGlideDoc));
	}

	return {
		glides,
		lastGlideDoc: _lastGlideDoc
	};
}

async function fetchGlides(lastGlideDoc: GlideProps, loggedInUser: any) {
	const _loggedInUSerRef = doc(db, 'users', loggedInUser.uid);
	const constraints: any = [orderBy('date', 'desc'), limit(10)];

	if (loggedInUser.following.length > 0) {
		constraints.push(
			where('user', 'in', [...loggedInUser.following, _loggedInUSerRef])
		);
	} else {
		constraints.push(where('user', '==', _loggedInUSerRef));
	}

	if (lastGlideDoc) {
		constraints.push(startAfter(lastGlideDoc));
	}

	const queryData = query(collection(db, 'glides'), ...constraints);
	const querySnap = await getDocs(queryData);

	const _lastGlideDoc = querySnap.docs[querySnap.docs.length - 1];

	const glides = await getGlidesFromDocs(querySnap);

	return { glides, lastGlideDoc: _lastGlideDoc };
}

function getGlideCollection(glideLookup) {
	let glideCollection;

	if (glideLookup) {
		const ref = doc(db, glideLookup);
		glideCollection = collection(ref, 'glides');
	} else {
		glideCollection = collection(db, 'glides');
	}

	return glideCollection;
}

async function postGlide(
	glideData: { message: string; uid: string },
	glideLookup
) {
	const userRef = doc(db, 'users', glideData.uid);

	const glide = {
		...glideData,

		user: userRef,
		likesCount: 0,
		subglidesCount: 0,
		date: Timestamp.now()
	};

	const glideCollection = getGlideCollection(glideLookup);
	const newGlide = await addDoc(glideCollection, glide);

	if (glideLookup) {
		const ref = doc(db, glideLookup);
		await updateDoc(ref, {
			subglidesCount: increment(1)
		});
	}

	const userGlideRef = doc(userRef, 'glides', newGlide.id);
	await setDoc(userGlideRef, { lookup: newGlide });

	return { ...glide, id: newGlide.id, lookup: newGlide.path };
}

export {
	postGlide,
	fetchGlides,
	onGlidesSnapshot,
	fetchGlide,
	fetchSubglides,
	uploadImage
};
