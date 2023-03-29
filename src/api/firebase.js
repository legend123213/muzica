// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgfdDhDjah4Tl5rR11zM56PktfrdA-wvo",
  authDomain: "addismusic-7c972.firebaseapp.com",
  projectId: "addismusic-7c972",
  storageBucket: "addismusic-7c972.appspot.com",
  messagingSenderId: "21148330714",
  appId: "1:21148330714:web:5e8a0589e42ac3b23b53e3",
  measurementId: "G-S7BX1E4RLE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
