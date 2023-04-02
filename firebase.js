
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBiLXgKwdhxcp_SuiCehfclu9LtwiCkcRE",
  authDomain: "registration-form-a654d.firebaseapp.com",
  databaseURL: "https://registration-form-a654d-default-rtdb.firebaseio.com",
  projectId: "registration-form-a654d",
  storageBucket: "registration-form-a654d.appspot.com",
  messagingSenderId: "785636530923",
  appId: "1:785636530923:web:bde78e17aac28b4bfb7cae",
  measurementId: "G-61CZH3V0SD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

