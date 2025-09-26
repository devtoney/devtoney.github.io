// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, collection, getDocs, updateDoc, doc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";


// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBNJ6cFaKa9BiO1QjiqMGILbqmw7zk2MYI",
    authDomain: "malappurampalli.firebaseapp.com",
    projectId: "malappurampalli",
    storageBucket: "malappurampalli.firebasestorage.app",
    messagingSenderId: "30076496594",
    appId: "1:30076496594:web:d0189e3b475053a3a91b0b",
    measurementId: "G-EKXHM1F9TQ"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
