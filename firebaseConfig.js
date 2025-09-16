// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf0Y9FX0WFrHXU1HyGdsPSkKPPhTAFZ3c",
  authDomain: "promosrealvainduvet.firebaseapp.com",
  projectId: "promosrealvainduvet",
  storageBucket: "promosrealvainduvet.firebasestorage.app",
  messagingSenderId: "144379086618",
  appId: "1:144379086618:web:a33afe53638c02e70c0ea3",
  measurementId: "G-NFD6250SGP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

