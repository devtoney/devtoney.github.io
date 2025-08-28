// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, collection, getDocs, updateDoc, doc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";


// Firebase config

const firebaseConfig = {
  apiKey: "AIzaSyC6ZkTsrSVj9tjZtAM8vfGx1MiTTe44nNw",
  authDomain: "maria-nilayam.firebaseapp.com",
  projectId: "maria-nilayam",
  storageBucket: "maria-nilayam.firebasestorage.app",
  messagingSenderId: "1013078111447",
  appId: "1:1013078111447:web:d5eac0adab3a449bb82c92",
  measurementId: "G-4KMMY7SG0N"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

//ORIGINAL*****************************************************************************************************
// Import compat SDKs
// (using the same version you have in your HTML, but moved here)
// import "https://www.gstatic.com/firebasejs/12.1.0/firebase-app-compat.js";
// import "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore-compat.js";

// // Firebase config
// const firebaseConfig = {
//   apiKey: "AIzaSyDbAsRzO4MH45pjWwgcyW68YHKz1wVC8iU",
//   authDomain: "hospital-abd2d.firebaseapp.com",
//   projectId: "hospital-abd2d",
//   storageBucket: "hospital-abd2d.firebasestorage.app",
//   messagingSenderId: "729243110390",
//   appId: "1:729243110390:web:46b554cdf62883689055d7",
//   measurementId: "G-0JZ3M78QN1"
// };

// // Initialize
// firebase.initializeApp(firebaseConfig);

// // Export Firestore so other scripts can use it
// export const db = firebase.firestore();

