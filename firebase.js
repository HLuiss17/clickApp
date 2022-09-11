// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgLaP9BHLvX4uICo11CltUHZUbTjeisrY",
  authDomain: "clickapp-5ccdc.firebaseapp.com",
  projectId: "clickapp-5ccdc",
  storageBucket: "clickapp-5ccdc.appspot.com",
  messagingSenderId: "1024803258844",
  appId: "1:1024803258844:web:a43399cd4141a2ba164f19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);