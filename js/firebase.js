// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBymiTjjqUN-AAspzoA_bOGUWOzEc9o3jA",
  authDomain: "amovis-cafe-booking.firebaseapp.com",
  projectId: "amovis-cafe-booking",
  storageBucket: "amovis-cafe-booking.firebasestorage.app",
  messagingSenderId: "1049074624404",
  appId: "1:1049074624404:web:35b18f7c0470939257d181"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
