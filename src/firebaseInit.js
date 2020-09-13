import * as firebase from "firebase/app";
import "firebase/performance";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

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

const db = firebase.database();
const auth = firebase.auth();
const store = firebase.firestore();

const usersCollection = store.collection("users");
export const spreadSheet = "16Y2EyQrN4dnG5quEvYty4IGR3kLuKHItDf4r557PptI";
const sheetsCollection = db.ref(`${spreadSheet}/`);

export default {
  store,
  auth,
  usersCollection,
  sheetsCollection,
};
