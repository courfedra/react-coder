// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd8U3AqxkhKk6F0oy14Xl0FpgF35TbC1U",
  authDomain: "ramitanavidadecommerce.firebaseapp.com",
  projectId: "ramitanavidadecommerce",
  storageBucket: "ramitanavidadecommerce.appspot.com",
  messagingSenderId: "46400915612",
  appId: "1:46400915612:web:c4b38bb0e239cf563d4559"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);