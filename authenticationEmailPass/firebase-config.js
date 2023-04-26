import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyB3nfYEzRRPVwvoCa76S9YC30MM7P99IOI",
    authDomain: "fir-tut-b77ad.firebaseapp.com",
    projectId: "fir-tut-b77ad",
    storageBucket: "fir-tut-b77ad.appspot.com",
    messagingSenderId: "761217960035",
    appId: "1:761217960035:web:8b7510e495beb521d79056",
    measurementId: "G-2LFNRHVDW1"
  };
  const app=initializeApp(firebaseConfig);
  export const auth=getAuth(app);

   