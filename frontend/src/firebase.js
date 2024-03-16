// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcGW7FOMRKukQ3JHlz88c8X786tVc3-Qo",
  authDomain: "blog-personal-42e38.firebaseapp.com",
  projectId: "blog-personal-42e38",
  storageBucket: "blog-personal-42e38.appspot.com",
  messagingSenderId: "7724618352",
  appId: "1:7724618352:web:7ca9abe50ffbc8a9171ab5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);