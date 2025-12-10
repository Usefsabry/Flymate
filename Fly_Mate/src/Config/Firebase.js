import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhtVA0UC-YjvXr8ZcBeU7T8u6BnPv3B9E",
  authDomain: "flymate-d1c94.firebaseapp.com",
  projectId: "flymate-d1c94",
  storageBucket: "flymate-d1c94.appspot.com",
  messagingSenderId: "710616507649",
  appId: "1:710616507649:web:26a859d4322116ab16a700",
  measurementId: "G-8LVTGQPN6R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth, app };