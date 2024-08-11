// Import the functions you need from the SDKs you need
import { initializeApp } from "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.12.5/firebase-app.js"; // "firebase/app";
// import { getAnalytics } from "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.12.5/firebase-analytics.js"; // "firebase/analytics";
import { getAuth, onAuthStateChanged } from "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.12.5/firebase-auth.js"; // "firebase/auth";
import { getFirestore } from "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.12.5/firebase-firestore.js"; // "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const firebaseApp = initializeApp({
    apiKey: "AIzaSyC6zfUmk7uw8W9BRNt8lByJNFx9w5TsGz4",
    authDomain: "getting-started-with-fir-bebcb.firebaseapp.com",
    projectId: "getting-started-with-fir-bebcb",
    storageBucket: "getting-started-with-fir-bebcb.appspot.com",
    messagingSenderId: "15915151713",
    appId: "1:15915151713:web:dbba509a6b7eee961e1520",
    measurementId: "G-L9DRCP865K"
  });
// const analytics = getAnalytics(firebaseApp);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const todosCollection = collection(db, 'todos');
const snapshot = await getDocs(todosCollection);


// Detect auth state
onAuthStateChanged(auth, (user) => {
    if (user != null) {
        console.log('User is signed in');
    } 
    else {
        console.log('User is signed out');
    }
})





