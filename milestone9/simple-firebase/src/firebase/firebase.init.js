//do not share firebase config in online



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlQLfbtOzJYW8sBzgADS14EYo14PgfnEU",
  authDomain: "simple-firebase-e7c5c.firebaseapp.com",
  projectId: "simple-firebase-e7c5c",
  storageBucket: "simple-firebase-e7c5c.firebasestorage.app",
  messagingSenderId: "94846800412",
  appId: "1:94846800412:web:fb287d1a28d7787ba145d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;