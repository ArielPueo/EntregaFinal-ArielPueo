//Conexión con Firebase
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKva3lNMchtjB5p0Gwt64ytW9RGMBJilc",
  authDomain: "narutienda-a643e.firebaseapp.com",
  projectId: "narutienda-a643e",
  storageBucket: "narutienda-a643e.appspot.com",
  messagingSenderId: "872757031147",
  appId: "1:872757031147:web:2c1c3c1fa8dbd609d18eae"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);