import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyApxjN1HBvrB7FIcFO2ggIxqJ5OPisHlR0",
  authDomain: "crwn-db-4ee0e.firebaseapp.com",
  projectId: "crwn-db-4ee0e",
  storageBucket: "crwn-db-4ee0e.appspot.com",
  messagingSenderId: "391766811671",
  appId: "1:391766811671:web:5ed75b5c9360443fbb2852",
  measurementId: "G-RYH3P85D69",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
