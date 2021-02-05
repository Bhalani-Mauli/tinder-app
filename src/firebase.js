import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCttVEB7uV0pRv-942sSa83iGnzVzRCEd0",
  authDomain: "tinder-app-b033e.firebaseapp.com",
  databaseURL: "https://tinder-app-b033e.firebaseio.com",
  projectId: "tinder-app-b033e",
  storageBucket: "tinder-app-b033e.appspot.com",
  messagingSenderId: "252071416094",
  appId: "1:252071416094:web:5585f254d3d5d32085390f",
  measurementId: "G-KNZ6K53ZNJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;