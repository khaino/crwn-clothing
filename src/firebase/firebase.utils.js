import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCaabWeY5LjIDxyievLoC4tZnCCgSfZ1n4",
  authDomain: "crwn-db-c2be2.firebaseapp.com",
  databaseURL: "https://crwn-db-c2be2.firebaseio.com",
  projectId: "crwn-db-c2be2",
  storageBucket: "crwn-db-c2be2.appspot.com",
  messagingSenderId: "689009690099",
  appId: "1:689009690099:web:202d4dd68830018025fe86"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;