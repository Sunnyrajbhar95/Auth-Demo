// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvb2tftDJy67ig8qC7SOmyoqYKHsfXYJk",
  authDomain: "login-auth-9bd97.firebaseapp.com",
  projectId: "login-auth-9bd97",
  storageBucket: "login-auth-9bd97.appspot.com",
  messagingSenderId: "1037322464871",
  appId: "1:1037322464871:web:8844a27fb721b0a4d2eec2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;