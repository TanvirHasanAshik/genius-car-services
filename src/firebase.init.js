// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCw4Drv447xwl7nc0_AJ2PmeSvnBJDIE2U",
    authDomain: "genius-car-services-54d3d.firebaseapp.com",
    projectId: "genius-car-services-54d3d",
    storageBucket: "genius-car-services-54d3d.appspot.com",
    messagingSenderId: "616160870668",
    appId: "1:616160870668:web:15327d6c6c47241b3a8929"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;