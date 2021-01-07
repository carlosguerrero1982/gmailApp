
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA1n-6PG2q0H4xZa3Y5Dwde37ohVpOvy_Y",
    authDomain: "app-77512.firebaseapp.com",
    projectId: "app-77512",
    storageBucket: "app-77512.appspot.com",
    messagingSenderId: "716474789292",
    appId: "1:716474789292:web:0ec73f41102f492cd3de09",
    measurementId: "G-CJ39FYZPLR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,provider};