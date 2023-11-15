import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlkr6Lu6WRITiXn9GrwJPAsgZtTWqf5to",
  authDomain: "gym-management-3a159.firebaseapp.com",
  projectId: "gym-management-3a159",
  storageBucket: "gym-management-3a159.appspot.com",
  messagingSenderId: "369504279537",
  appId: "1:369504279537:web:c27f6af49fe10b5b59c250",
};

const app = firebase.initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = firebase.auth();
