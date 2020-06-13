 import firebase from 'firebase/app';

 import 'firebase/firestore';
 import 'firebase/auth';
 const config= {
    apiKey: "AIzaSyBYNUYjDx8OSB9WBjAg7aQQEAZ2GylXZEc",
    authDomain: "sklep-internetowy-b97df.firebaseapp.com",
    databaseURL: "https://sklep-internetowy-b97df.firebaseio.com",
    projectId: "sklep-internetowy-b97df",
    storageBucket: "sklep-internetowy-b97df.appspot.com",
    messagingSenderId: "871801997615",
    appId: "1:871801997615:web:6f01ae6d37f1650fe039da",
    measurementId: "G-M7CNFK98NE"
  };

  firebase.initializeApp(config);

  export const auth= firebase.auth();
  export const firestore= firebase.firestore();

  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;