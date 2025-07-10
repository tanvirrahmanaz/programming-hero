// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey, // Use environment variable for security
  authDomain: import.meta.env.VITE_authDomain, // Use environment variable for security
  projectId: import.meta.env.VITE_projectId, // Use environment variable for security
  storageBucket: import.meta.env.VITE_storageBucket, // Use environment variable for security
  messagingSenderId: import.meta.env.VITE_messagingSenderId, // Use environment variable for security
  appId: import.meta.env.VITE_appId // Use environment variable for security
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export   const auth = getAuth(app);




