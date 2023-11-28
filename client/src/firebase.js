// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-dd130.firebaseapp.com",
  projectId: "real-estate-dd130",
  storageBucket: "real-estate-dd130.appspot.com",
  messagingSenderId: "424150343618",
  appId: "1:424150343618:web:7115dae176f05f037fc05b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);