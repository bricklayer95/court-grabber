import { deleteApp, getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_FIREBASE_APPID
  };

  let firebaseApp;
    if (!getApps().length) {
        firebaseApp = initializeApp(firebaseConfig)
    } else {
        firebaseApp = getApp()
        deleteApp(firebaseApp)
        firebaseApp = initializeApp(firebaseConfig)
    }

    export const db = getFirestore(firebaseApp)
    export const auth = getAuth(firebaseApp)
