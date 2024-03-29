// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
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
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
//sign in with google redirect
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

//get the database instance (firestore)
export const db = getFirestore();

//method to upload/save data into firebase db
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  //console.log("done uploading data");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapShot) => docSnapShot.data());

  // return categoryMap;
};

//method to upload data to firebase db,  this is called from the products context
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;
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
        ...additionalInformation,
      });
    } catch (error) {
      //console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = async (callback) =>
  onAuthStateChanged(auth, callback);
