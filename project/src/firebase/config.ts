import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  // Users need to replace these with their actual Firebase config values
  apiKey: "AIzaSyDanHq6bxVZgQmS9z-pmdY4wFsa1K6woNc", //project-api-key-here
  authDomain: "house-of-festival-c0b5d.firebaseapp.com",
  projectId: "house-of-festival-c0b5d",
  storageBucket: "house-of-festival-c0b5d.firebasestorage.app",
  messagingSenderId: "867221237008",
  appId: "1:867221237008:web:0fa2fb78360220bb34c995",
  measurementId: "G-MGHB2QFCMM"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;