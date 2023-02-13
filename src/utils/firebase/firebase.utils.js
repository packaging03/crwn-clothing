// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  Firestore,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV5ji6A_3pF3Y9hyHIoIj2rSLvrXKjlJk",
  authDomain: "crwn-clothing-db-22a58.firebaseapp.com",
  projectId: "crwn-clothing-db-22a58",
  storageBucket: "crwn-clothing-db-22a58.appspot.com",
  messagingSenderId: "405677591707",
  appId: "1:405677591707:web:4e70a8d85409b1da120a3e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//instantiate google auth provider, you can as do the same for Facebook etc.
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

//sign in with google popup
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
//sign in with google redirect
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

//get the database instance (firestore)
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};
