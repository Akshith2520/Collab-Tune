// js/firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// 🔐 Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBDAwGnlZyyB4_u8UJNRkZF5ztaUJfva_Q",
  authDomain: "qr-shop-6f9b7.firebaseapp.com",
  projectId: "qr-shop-6f9b7",
  storageBucket: "qr-shop-6f9b7.appspot.com",  // ⚠️ FIXED
  messagingSenderId: "250686456019",
  appId: "1:250686456019:web:76f240acfd185eaf565426",
  measurementId: "G-E3Q8T6F979"
};

// 🚀 Initialize App
const app = initializeApp(firebaseConfig);

// 🔥 Services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// 📦 Export
export { auth, db, storage };