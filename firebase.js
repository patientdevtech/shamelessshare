import firebase from "firebase";
import "firebase/storage"

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV6xaTKojH8LGXVtOLxDnlfFLKdZiVnbs",
  authDomain: "nextjsapp-94119.firebaseapp.com",
  projectId: "nextjsapp-94119",
  storageBucket: "nextjsapp-94119.appspot.com",
  messagingSenderId: "242593790650",
  appId: "1:242593790650:web:723719ace3f2bf5464a083"
};

// // Initialize Firebase
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export {db, storage}