// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore}from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWHS0Kkey5P0MEYsmvDNtSKanEHYa6On4",
  authDomain: "crud-24308.firebaseapp.com",
  projectId: "crud-24308",
  storageBucket: "crud-24308.appspot.com",
  messagingSenderId: "276825201627",
  appId: "1:276825201627:web:019a66081bc4696817e5fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)


