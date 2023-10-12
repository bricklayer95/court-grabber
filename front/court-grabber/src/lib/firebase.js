import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD3bnYc3nRujmp68hgOJMB3r2ma63OPFk8",
    authDomain: "court-booker-waitlist.firebaseapp.com",
    projectId: "court-booker-waitlist",
    storageBucket: "court-booker-waitlist.appspot.com",
    messagingSenderId: "833391686735",
    appId: "1:833391686735:web:7ecc9f4cf198b5a8d1a63a"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export default db;