import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC36ENT3ZGG2CNJv6b5WZMCgtGY3nj3OX4",
  authDomain: "meal-app-2415f.firebaseapp.com",
  projectId: "meal-app-2415f",
  storageBucket: "meal-app-2415f.appspot.com",
  messagingSenderId: "323201724605",
  appId: "1:323201724605:web:63044ee5d6c512395a07d4",
  measurementId: "G-SEPM3ZVCL4",
};

//init firebase

firebase.initializeApp(firebaseConfig);

//initialize services

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
