import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCDjGRlXhI6DV_qE_BP-La9AU6jcoUPFVM",
  authDomain: "authentication-28ecb.firebaseapp.com",
  projectId: "authentication-28ecb",
  storageBucket: "authentication-28ecb.appspot.com",
  messagingSenderId: "531700982922",
  appId: "1:531700982922:web:63fe527eb595e4d5783973"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Initialize Firestore
const firestore = getFirestore(app);

export { app, auth, firestore };
