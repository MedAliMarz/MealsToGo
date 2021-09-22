import firebase from "firebase/app";

// Optionally import the services that you want to use
import "firebase/auth";
export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);
