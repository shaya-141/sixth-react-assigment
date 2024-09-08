// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2y5guZcU1aCccgZFbpmB47Qre6DrbLZ4",
  authDomain: "ecommercereact2.firebaseapp.com",
  projectId: "ecommercereact2",
  storageBucket: "ecommercereact2.appspot.com",
  messagingSenderId: "846272691985",
  appId: "1:846272691985:web:2c35413d1a9f993348d6b0",
  measurementId: "G-YSCCE9V6CH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export {app ,auth}