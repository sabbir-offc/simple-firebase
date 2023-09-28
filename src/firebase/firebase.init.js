// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCYMjEWTNCKv6hKLzP8TvHfDy9tjJpFK0",
    authDomain: "simple-firebase-993aa.firebaseapp.com",
    projectId: "simple-firebase-993aa",
    storageBucket: "simple-firebase-993aa.appspot.com",
    messagingSenderId: "318461134226",
    appId: "1:318461134226:web:9772c5280b38c4bb95ed4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app