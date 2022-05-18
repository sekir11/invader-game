// Import the functions you need from the SDKs you need
// const { initializeApp } = require("firebase/app");
// const { getAnalytics } = require("firebase/analytics");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn_Cq4CHjt-m2IPH4un1ye3xpsfh_BbUY",
  authDomain: "invader-game-e2ae2.firebaseapp.com",
  databaseURL:
    "https://invader-game-e2ae2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "invader-game-e2ae2",
  storageBucket: "invader-game-e2ae2.appspot.com",
  messagingSenderId: "869543238714",
  appId: "1:869543238714:web:2a7188afb995bc46ac6903",
  measurementId: "G-36VC7QHJHD",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

module.exports = { app };
