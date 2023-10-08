import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBrVs1BDBWr93jSWbT1pX_GQYyiNb5wB8w",
    authDomain: "event-management-5ebf6.firebaseapp.com",
    projectId: "event-management-5ebf6",
    storageBucket: "event-management-5ebf6.appspot.com",
    messagingSenderId: "209723044532",
    appId: "1:209723044532:web:a1f778fd1989bbd2869de1"
  };

  const app=initializeApp(firebaseConfig)

  const auth=getAuth(app)

  export default auth