import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBDyZzsohZ112kZ4DWnZDHq6myvzYYkKco",
  authDomain: "mcproject-201c6.firebaseapp.com",
  projectId: "mcproject-201c6",
  storageBucket: "mcproject-201c6.appspot.com",
  messagingSenderId: "919212047539",
  appId: "1:919212047539:web:68c6d070ebc9a8565e04c6",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const firestore = firebase.firestore();
const storage = firebase.storage();

export { firebase, firestore, storage };
