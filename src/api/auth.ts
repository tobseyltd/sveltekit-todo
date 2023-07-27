import { firebaseAuth, db } from '@db/index';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

function logoutUser() {
	return signOut(firebaseAuth);
}

async function registerUser(form: any) {
	const { user: registerUser } = await createUserWithEmailAndPassword(
		firebaseAuth,
		form.email,
		form.password
	);

	const user = {
		uid: registerUser.uid,
		fullName: form.fullName,
		nickName: form.nickName,
		email: form.email,
		avatar: form.avatar,
		followers: [],
		following: [],
		followersCount: 0,
		followingCOunt: 0
	};

	const userDoc = doc(db, 'users', registerUser.uid);

	await setDoc(userDoc, user);
	return registerUser;
}

export { registerUser, logoutUser };
