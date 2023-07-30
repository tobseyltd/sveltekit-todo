import { db } from '@db/index';
import {
	doc,
	getDoc,
	collection,
	getDocs,
	query,
	where
} from 'firebase/firestore';

async function fetchUsers(loggedInUser) {
	const usersCollection = query(
		collection(db, 'users'),
		where('uid', '!=', loggedInUser.uid)
	);
	const usersSnap = await getDocs(usersCollection);

	return usersSnap.docs.map((doc) => doc.data());
}

async function getUser(uid: string) {
	const docRef = doc(db, 'users', uid);
	const docSnap = await getDoc(docRef);

	return docSnap.data();
}

export { getUser, fetchUsers };
