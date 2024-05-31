import firebase from 'firebase';

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyBbcCo7QwPBiFqZ_ZKkoG2oO5ooKKYpuCo",
    authDomain: "instagram-clone-fdfea.firebaseapp.com",
    projectId: "instagram-clone-fdfea",
    storageBucket: "instagram-clone-fdfea.appspot.com",
    messagingSenderId: "435129863409",
    appId: "1:435129863409:web:2be02eaca54f048bfc2d50",
    measurementId: "G-S6H394GN0C"
  });

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export {db, auth, storage, functions};