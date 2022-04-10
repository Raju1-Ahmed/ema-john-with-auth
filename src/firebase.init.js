// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARx9w6piO8QCTv5MwCIg4X_Y9wZnEVkPg",
  authDomain: "ema-john-simple-ad553.firebaseapp.com",
  projectId: "ema-john-simple-ad553",
  storageBucket: "ema-john-simple-ad553.appspot.com",
  messagingSenderId: "742047821747",
  appId: "1:742047821747:web:648495acd23f246a7f25c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;