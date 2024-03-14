// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn4X-qe_yfU07rHPq7Mn8JeGzc1SMpU-c",
  authDomain: "netflixgpt-43046.firebaseapp.com",
  projectId: "netflixgpt-43046",
  storageBucket: "netflixgpt-43046.appspot.com",
  messagingSenderId: "1037597534702",
  appId: "1:1037597534702:web:6044be862010946d5946ff",
  measurementId: "G-KCD2ZTN7YM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();