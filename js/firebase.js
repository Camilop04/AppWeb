import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCArXocJJn601tvJ_m7gk4J90yDCZcfTII",
  authDomain: "appweb-2fc3b.firebaseapp.com",
  projectId: "appweb-2fc3b",
  storageBucket: "appweb-2fc3b.appspot.com",
  messagingSenderId: "893963163054",
  appId: "1:893963163054:web:4d20ac7718644e21b1e43f",
  measurementId: "G-BNBJ4HCQ37"
};

const app = initializeApp(firebaseConfig); 
const auth = getAuth();
const db = getFirestore();

export const loginvalidation=(email,password)=>signInWithEmailAndPassword(auth,email,password)
export const registeruser=(email,password)=>createUserWithEmailAndPassword(auth,email,password)