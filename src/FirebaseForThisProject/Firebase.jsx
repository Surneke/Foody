import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCsx1n5_Pzfu8buMaFTxh-QVm2qQO8T5R4",
  authDomain: "foody-5ec4a.firebaseapp.com",
  projectId: "foody-5ec4a",
  storageBucket: "foody-5ec4a.appspot.com",
  messagingSenderId: "983135293410",
  appId: "1:983135293410:web:bc064c8ff02c14f2d373bb",
  measurementId: "G-KSZRZ3X4QX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// localStorage