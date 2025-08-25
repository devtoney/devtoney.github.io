// Import compat SDKs
// (using the same version you have in your HTML, but moved here)
import "https://www.gstatic.com/firebasejs/9.18.0/firebase-app-compat.js";
import "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore-compat.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDbAsRzO4MH45pjWwgcyW68YHKz1wVC8iU",
  authDomain: "hospital-abd2d.firebaseapp.com",
  projectId: "hospital-abd2d",
  storageBucket: "hospital-abd2d.firebasestorage.app",
  messagingSenderId: "729243110390",
  appId: "1:729243110390:web:46b554cdf62883689055d7",
  measurementId: "G-0JZ3M78QN1"
};

// Initialize
firebase.initializeApp(firebaseConfig);

// Export Firestore so other scripts can use it
export const db = firebase.firestore();
