// import { initializeApp } from 'firebase/app'

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// }

// export const app = initializeApp(firebaseConfig)



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzClbyvTuLVYAS5bim3Bl52m0Geu6KjvU",
  authDomain: "atwelve-hangout.firebaseapp.com",
  projectId: "atwelve-hangout",
  storageBucket: "atwelve-hangout.appspot.com",
  messagingSenderId: "81622908469",
  appId: "1:81622908469:web:dd60f6a87b23ef6195fb7c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
