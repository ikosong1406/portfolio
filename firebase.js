import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0b6W7EIWJVdodZG_SBaemkx-1ajKa9zs",
  authDomain: "portfolio-8e713.firebaseapp.com",
  projectId: "portfolio-8e713",
  storageBucket: "portfolio-8e713.appspot.com",
  messagingSenderId: "644068490166",
  appId: "1:644068490166:web:be87b653dcb711c7c85f17",
  measurementId: "G-53LMCJPYT3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);
