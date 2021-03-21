import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';
import 'firebase/storage';
import "firebase/analytics";
import "firebase-admin";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDagkUmxY8WQ5Th7zIf12QkqctyvDf6P8k",
    authDomain: "e-mobilier-web.firebaseapp.com",
    projectId: "e-mobilier-web",
    storageBucket: "e-mobilier-web.appspot.com",
    messagingSenderId: "216142006034",
    appId: "1:216142006034:web:316279ddb5307d554a95cb",
    measurementId: "G-YTYGK78T80"
})

export const auth = app.auth()
export default app