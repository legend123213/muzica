// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const apike = import.meta.env.VITE_FIREBASE_API_KEY;
const authf = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
const pro = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const stro = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
const mess = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID;
const appid = import.meta.env.VITE_FIREBASE_APP_ID;
const mid = import.meta.env.VITE_FIREBASE_MEASUREMENT_ID;

const firebaseConfig = {
  apiKey: apike,
  authDomain: authf,
  projectId: pro,
  storageBucket: stro,
  messagingSenderId: mess,
  appId: appid,
  measurementId: mid,
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
