import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVsaO04YcL69ILD2RfgAVbvJgauBpV7Vk",
  authDomain: "olx-app-7f43d.firebaseapp.com",
  projectId: "olx-app-7f43d",
  storageBucket: "olx-app-7f43d.appspot.com",
  messagingSenderId: "1002633997138",
  appId: "1:1002633997138:web:cfa0b70baf58f3dcbbe88b",
  measurementId: "G-48BBE4SF9Y"
};


export default firebase.initializeApp(firebaseConfig)