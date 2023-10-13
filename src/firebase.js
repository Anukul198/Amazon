// Import the functions you need from the SDKs you need


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBXr2jI-V5yMGK1qjciLF8C0GeSETYkc9c",
  authDomain: "fir-15a22.firebaseapp.com",
  databaseURL: "https://fir-15a22-default-rtdb.firebaseio.com",
  projectId: "fir-15a22",
  storageBucket: "fir-15a22.appspot.com",
  messagingSenderId: "147024465048",
  appId: "1:147024465048:web:b5d30f823efca7c16f94ed",
  measurementId: "G-Y09T5KTQTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebase = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);   

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };