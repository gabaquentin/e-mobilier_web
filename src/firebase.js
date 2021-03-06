import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';
import 'firebase/storage';
import "firebase/analytics";

const app = firebase.initializeApp({
    apiKey: "AIzaSyC3YpjtjaR0JezUbIOzgvnV7zDsSpl4eVs",
    authDomain: "e-mobilier-a2941.firebaseapp.com",
    projectId: "e-mobilier-a2941",
    storageBucket: "e-mobilier-a2941.appspot.com",
    messagingSenderId: "101533349612",
    appId: "1:101533349612:web:297dc8ed68cfa3ec3a57c9",
    measurementId: "G-4T0HKVLJ5X"
})

export const auth = app.auth()
export default app