import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtk4VEl2hGxIgvzCCYGDQh5678n7EHNsY",
  authDomain: "signal-clone-47d89.firebaseapp.com",
  projectId: "signal-clone-47d89",
  storageBucket: "signal-clone-47d89.appspot.com",
  messagingSenderId: "589008242528",
  appId: "1:589008242528:web:758c3c12c4320264e14005",
  measurementId: "G-0RXNVEE6G5"
};


let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
