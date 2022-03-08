import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";
import firebaseConfig from "./config";

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const auth = firebase.auth();

export {db, auth};
