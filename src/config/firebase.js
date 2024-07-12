// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfwrm39bes0ZvIebnamg4MvkMlCkjDNzo",
  authDomain: "react-contact-app-3efb3.firebaseapp.com",
  projectId: "react-contact-app-3efb3",
  storageBucket: "react-contact-app-3efb3.appspot.com",
  messagingSenderId: "342354678934",
  appId: "1:342354678934:web:25e47758415d2a86ce9eb7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
