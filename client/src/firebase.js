// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuuLhmjFGuErfL01VrPA4U0soGtjkbHEI",
  authDomain: "cmpt276-hospital.firebaseapp.com",
  projectId: "cmpt276-hospital",
  storageBucket: "cmpt276-hospital.appspot.com",
  messagingSenderId: "199201322554",
  appId: "1:199201322554:web:a86ac30c261da809db2703"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);