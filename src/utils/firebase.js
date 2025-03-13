// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB52wWl-tj5yEPH-e4G6L2DOy0u-2kwGdw",
  authDomain: "netflixgpt-9c6e1.firebaseapp.com",
  projectId: "netflixgpt-9c6e1",
  storageBucket: "netflixgpt-9c6e1.firebasestorage.app",
  messagingSenderId: "1044968098966",
  appId: "1:1044968098966:web:cfdf860d9b161beb37c6b7",
  measurementId: "G-SNCSB0DLFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);