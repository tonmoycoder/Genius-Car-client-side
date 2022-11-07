// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxBFkBf0PEcBNE7G6bbah3X9r1rBgfwkM",
  authDomain: "genius-car-failure.firebaseapp.com",
  projectId: "genius-car-failure",
  storageBucket: "genius-car-failure.appspot.com",
  messagingSenderId: "927759372354",
  appId: "1:927759372354:web:51c50137ec1e0aa0b19ddb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;