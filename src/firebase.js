import firebase from 'firebase';

const firebaseApp = firebase.initializeApp( {
  apiKey: "AIzaSyAO7fySZLhsntfISdLnh9XE5zj40P4QM-I",
  authDomain: "insta-app-a00c0.firebaseapp.com",
  projectId: "insta-app-a00c0",
  storageBucket: "insta-app-a00c0.appspot.com",
  messagingSenderId: "563190886935",
  appId: "1:563190886935:web:a72ba18954f5ba92bbe252",
  measurementId: "G-R2VPV86CS9"
 
  });

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export {db, auth, storage, functions};