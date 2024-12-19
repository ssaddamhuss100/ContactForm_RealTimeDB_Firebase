// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATVVXZSCzolDE2yWy3LmN4tevjA3aXXs8",
  authDomain: "contactform-ff635.firebaseapp.com",
  projectId: "contactform-ff635",
  storageBucket: "contactform-ff635.firebasestorage.app",
  messagingSenderId: "247295723978",
  appId: "1:247295723978:web:07970d7cbac1558928e733"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export firestore database
//it will be imported into your react app whenever it is needed
export const db = getFirestore(app);