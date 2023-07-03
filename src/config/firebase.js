// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5Va8DizLEops5WzTVLybPleQwCISErRI",
  authDomain: "auth-production-5c069.firebaseapp.com",
  projectId: "auth-production-5c069",
  storageBucket: "auth-production-5c069.appspot.com",
  messagingSenderId: "788190864372",
  appId: "1:788190864372:web:933ca1f46124a26cdd4fa1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)