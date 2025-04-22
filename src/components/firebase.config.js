import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDocs,
  collection,
  deleteDoc,
  updateDoc,
  addDoc,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB4h_r0Bncy1Cg84Wae7BlBtPc5R3kkdJk",
  authDomain: "react-e-commerce-32013.firebaseapp.com",
  projectId: "react-e-commerce-32013",
  storageBucket: "react-e-commerce-32013.firebasestorage.app",
  messagingSenderId: "370022107350",
  appId: "1:370022107350:web:27e3e4a1c557e77f09a177",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, doc, getDocs, collection, deleteDoc, updateDoc,addDoc};
