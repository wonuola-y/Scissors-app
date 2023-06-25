// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  onAuthStateChanged,
  getRedirectResult,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyUzU6CLawfKO4g8NZMqPi3ttXk5yu9Gg",
  authDomain: "scissors-609e3.firebaseapp.com",
  projectId: "scissors-609e3",
  storageBucket: "scissors-609e3.appspot.com",
  messagingSenderId: "727275790453",
  appId: "1:727275790453:web:a6ef8cc5dd5bf71384583c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// set up auth provider
const provider = new GoogleAuthProvider();
const auth = getAuth();
export {
  app,
  provider,
  auth,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
};
