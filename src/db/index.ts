// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyB-S54ggQrVOl8bi7gl5JMsD6o8GXIKiyI',
	authDomain: 'svelte-udemy-twitter-clone.firebaseapp.com',
	projectId: 'svelte-udemy-twitter-clone',
	storageBucket: 'svelte-udemy-twitter-clone.appspot.com',
	messagingSenderId: '931867146925',
	appId: '1:931867146925:web:b9d65bee37b5f3cb106424',
	measurementId: 'G-VH1ZNB1Q6C'
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const firebaseAuth = getAuth(app);
