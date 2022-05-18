// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5HCOBBtRk1L8UDQ7x6MI9uqb6cagnlAI",
    authDomain: "todoapp-ea55a.firebaseapp.com",
    projectId: "todoapp-ea55a",
    storageBucket: "todoapp-ea55a.appspot.com",
    messagingSenderId: "749599695256",
    appId: "1:749599695256:web:989509b76e67aab9038bed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;