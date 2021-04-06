import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBNeWeWdCN-TmbWV5Iuoh8lOW9L4JtKIWs',
	authDomain: 'g-mail-2021.firebaseapp.com',
	projectId: 'g-mail-2021',
	storageBucket: 'g-mail-2021.appspot.com',
	messagingSenderId: '495027838390',
	appId: '1:495027838390:web:b97b00ca6b64181a8df517',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
