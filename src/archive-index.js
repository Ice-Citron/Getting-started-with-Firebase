// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6zfUmk7uw8W9BRNt8lByJNFx9w5TsGz4",
  authDomain: "getting-started-with-fir-bebcb.firebaseapp.com",
  projectId: "getting-started-with-fir-bebcb",
  storageBucket: "getting-started-with-fir-bebcb.appspot.com",
  messagingSenderId: "15915151713",
  appId: "1:15915151713:web:dbba509a6b7eee961e1520",
  measurementId: "G-L9DRCP865K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);