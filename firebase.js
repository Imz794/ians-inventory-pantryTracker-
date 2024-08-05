// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0AfAC3YyTnEkMXTb7w890VFWexY6IdRM",
  authDomain: "inventory-management-e786c.firebaseapp.com",
  projectId: "inventory-management-e786c",
  storageBucket: "inventory-management-e786c.appspot.com",
  messagingSenderId: "971739201139",
  appId: "1:971739201139:web:4cf5d798233c43e60ab406",
  measurementId: "G-8Y038TN1V2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}