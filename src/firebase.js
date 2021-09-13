import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxPqgczdwa9NVcUL5hxH3RWYqLDUEB0iA",
  authDomain: "linkedin-clone-21fef.firebaseapp.com",
  projectId: "linkedin-clone-21fef",
  storageBucket: "linkedin-clone-21fef.appspot.com",
  messagingSenderId: "9791856329",
  appId: "1:9791856329:web:fbf2222ac8892eaafcf718",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();

export { db, auth };
