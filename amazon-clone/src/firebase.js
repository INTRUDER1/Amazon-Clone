import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTb8H5tdJClimwtb7p23O6Y2c0wcSHdcQ",
  authDomain: "clone-5aa14.firebaseapp.com",
  databaseURL: "https://clone-5aa14.firebaseio.com",
  projectId: "clone-5aa14",
  storageBucket: "clone-5aa14.appspot.com",
  messagingSenderId: "338469800144",
  appId: "1:338469800144:web:aa6d98415789f0aaefb6d5",
  measurementId: "G-M2VHBYQS5B"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();

export default { db, auth };