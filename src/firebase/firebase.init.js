// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2X48bUYVKcIRSv-d2UhOUebDEGvk6p_E",
  authDomain: "coffee-store-app-53f14.firebaseapp.com",
  projectId: "coffee-store-app-53f14",
  storageBucket: "coffee-store-app-53f14.firebasestorage.app",
  messagingSenderId: "1062093876314",
  appId: "1:1062093876314:web:08e4a5766dd79bf3d37c63",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
