// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const firebaseApp = initializeApp({
    apiKey: "AIzaSyC6zfUmk7uw8W9BRNt8lByJNFx9w5TsGz4",
    authDomain: "getting-started-with-fir-bebcb.firebaseapp.com",
    projectId: "getting-started-with-fir-bebcb",
    storageBucket: "getting-started-with-fir-bebcb.appspot.com",
    messagingSenderId: "15915151713",
    appId: "1:15915151713:web:dbba509a6b7eee961e1520",
    measurementId: "G-L9DRCP865K"
  });

const auth = getAuth(firebaseApp);


// Detect auth state
onAuthStateChanged(auth, (user) => {
    if (user != null) {
        console.log('User is signed in');
    } 
    else {
        console.log('User is signed out');
    }
})



// npm i webpack webpack-cli -D 
// node_modules/.bin/webpack --mode=development --entry ./src/index.js -o dist

