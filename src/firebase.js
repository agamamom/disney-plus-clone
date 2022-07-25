import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
    apiKey: "AIzaSyBFUmPOK1p0jh1ZiAIkoaCNr17qbDRo8O0",
    authDomain: "disneyplus-clone-8c4fc.firebaseapp.com",
    projectId: "disneyplus-clone-8c4fc",
    storageBucket: "disneyplus-clone-8c4fc.appspot.com",
    messagingSenderId: "232470383444",
    appId: "1:232470383444:web:74f37ddbee12916135d6c1"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;