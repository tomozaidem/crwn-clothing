import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAC-7xUqiAbsVDmp1JAlESX5A1R_vGBmG4",
  authDomain: "crwn-clothing-db-775b8.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-775b8.firebaseio.com",
  projectId: "crwn-clothing-db-775b8",
  storageBucket: "crwn-clothing-db-775b8.appspot.com",
  messagingSenderId: "467122317276",
  appId: "1:467122317276:web:2d721efcf5ba85b4445119",
  measurementId: "G-FZCG7PTZSG"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
