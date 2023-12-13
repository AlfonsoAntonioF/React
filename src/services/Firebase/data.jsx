// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqL8yV0q37ZJVjg8oOHstlWQqYtIzENsM",
  authDomain: "admisionbuapls.firebaseapp.com",
  projectId: "admisionbuapls",
  storageBucket: "admisionbuapls.appspot.com",
  messagingSenderId: "241218346522",
  appId: "1:241218346522:web:b7bdeb66b838b72c2ebba3",
  measurementId: "G-GK70YSQCGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);