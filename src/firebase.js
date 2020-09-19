import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBXdcsaD26bapYVVStznJmtCfOp9TwUPec",
  authDomain: "tinder-clone-e8920.firebaseapp.com",
  databaseURL: "https://tinder-clone-e8920.firebaseio.com",
  projectId: "tinder-clone-e8920",
  storageBucket: "tinder-clone-e8920.appspot.com",
  messagingSenderId: "146033292082",
  appId: "1:146033292082:web:439e6eca46cd5655175d2b",
  measurementId: "G-7ZTEHRZ2FW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
