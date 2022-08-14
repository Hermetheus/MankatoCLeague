// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx05xtpHjy0cvTPzFNEtgWokEIAcKs4vU",
  authDomain: "mankatocleague-630d4.firebaseapp.com",
  projectId: "mankatocleague-630d4",
  storageBucket: "mankatocleague-630d4.appspot.com",
  messagingSenderId: "858002727726",
  appId: "1:858002727726:web:933dc6d420dd591bb590bf",
  measurementId: "G-NX0S7H2N34",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const projectStorage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
