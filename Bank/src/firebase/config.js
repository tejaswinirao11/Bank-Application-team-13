// firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBNRkiXEtRHrYQW0OcGvt_Hv-NRQKx6uvE",
    authDomain: "contact-form-63027.firebaseapp.com",
    databaseURL: "https://contact-form-63027-default-rtdb.firebaseio.com",
    projectId: "contact-form-63027",
    storageBucket: "contact-form-63027.firebasestorage.app",
    messagingSenderId: "852166549152",
    appId: "1:852166549152:web:3293748f286ee235e573c5"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
