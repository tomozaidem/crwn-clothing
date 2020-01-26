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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  console.log(userAuth);

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
