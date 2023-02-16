import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCAxjYHf7ecMjpeObTyA1jG--IrVSEe730",
  authDomain: "cling-chat-app.firebaseapp.com",
  projectId: "cling-chat-app",
  storageBucket: "cling-chat-app.appspot.com",
  messagingSenderId: "324386502384",
  appId: "1:324386502384:web:37e1974f7a724b5aaab435",
  measurementId: "G-WYFQHNS64N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)