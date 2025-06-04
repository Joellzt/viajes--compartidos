import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-COwSstW2KIBOV2iErII_MLl_r9xhuJk",
  authDomain: "react-test-4af34.firebaseapp.com",
  projectId: "react-test-4af34",
  storageBucket: "react-test-4af34.firebasestorage.app",
  messagingSenderId: "549832449670",
  appId: "1:549832449670:web:84317eca7b7f518b49bb07"
};


const app = initializeApp(firebaseConfig);
export const autenticacion = getAuth(app); 
export const baseDeDatos = getFirestore(app); 