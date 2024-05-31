import firebase from 'firebase';

const firebaseApp = firebase.initializeApp( {
  apiKey: "AIzaSyB0PPXFbDY01Vf3nRA63hDn22D0ws36P2Y",
  authDomain: "woven-sensor-416923.firebaseapp.com",
  projectId: "woven-sensor-416923",
  storageBucket: "woven-sensor-416923.appspot.com",
  messagingSenderId: "833838519780",
  appId: "1:833838519780:web:dc076291e8a9396ddf63f1",
  measurementId: "G-1R9T2QYKRG"
  });

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export {db, auth, storage, functions};