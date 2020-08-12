import * as firebase from "firebase/app";
import "firebase/performance";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvLQTBabEnk5Pvss30DhXw7HqgF8AWnHU",
  authDomain: "match-4-help.firebaseapp.com",
  databaseURL: "https://match-4-help.firebaseio.com",
  projectId: "match-4-help",
  storageBucket: "match-4-help.appspot.com",
  messagingSenderId: "311934058253",
  appId: "1:311934058253:web:e66905cbd908287898ba44",
  measurementId: "G-64KD19EW01",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.performance();

const db = firebase.firestore();
const auth = firebase.auth();
const usersCollection = db.collection("users");
export default {
  db,
  auth,
  usersCollection,
};
