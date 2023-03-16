import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Import css
import "./styles.css";
//Import firebase
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqgrKi1jcW9NW6y1_0pQJqeHkzOWIkiBo",
  authDomain: "ecomerceunlam.firebaseapp.com",
  projectId: "ecomerceunlam",
  storageBucket: "ecomerceunlam.appspot.com",
  messagingSenderId: "296439390964",
  appId: "1:296439390964:web:48c77b6c381cd61d9234a1",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
