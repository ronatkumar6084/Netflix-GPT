// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOSFYAzCqzuUek1rpWYONjto_RdTyO_Dk",
  authDomain: "netflix-gpt-95127.firebaseapp.com",
  projectId: "netflix-gpt-95127",
  storageBucket: "netflix-gpt-95127.appspot.com",
  messagingSenderId: "1018467422593",
  appId: "1:1018467422593:web:893481f2bdd3c8526ad880",
  measurementId: "G-FY5Z264NKS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);