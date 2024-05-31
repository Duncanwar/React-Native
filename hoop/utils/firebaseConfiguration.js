// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZkkvhbGZ58d3Sn_bPBsMleM3yPVs7Xqw",
  authDomain: "native-bootcamp.firebaseapp.com",
  projectId: "native-bootcamp",
  storageBucket: "native-bootcamp.appspot.com",
  messagingSenderId: "456325533758",
  appId: "1:456325533758:web:12721c5e9dd13831ca816f",
  measurementId: "G-SMSCZB2TW0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);