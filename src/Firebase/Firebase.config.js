// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO9FwMacpOCCD2KjvAsPz24iostRdSMsI",
  authDomain: "the-news-dragon-b392f.firebaseapp.com",
  projectId: "the-news-dragon-b392f",
  storageBucket: "the-news-dragon-b392f.appspot.com",
  messagingSenderId: "311861085474",
  appId: "1:311861085474:web:abe99e175cea875fac917b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;