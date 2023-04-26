import React from 'react'
import {Link} from 'react-router-dom';

import {useState,useEffect} from 'react';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';

import {collection,getDocs} from "firebase/firestore"; 
import {auth} from '../firebase-config'
import { ToastContainer, toast } from 'react-toastify';

export default function Login() {

 // const userCollectionRef=collection(db,"users");

  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
 
 




  const authenticate=async()=>{
    try{
      const user= await signInWithEmailAndPassword(auth,email,pass);
         console.log("success")
    toast("sucess");

     }catch(error){
             console.log(error.message)
         }


  };
  

  return (
    <div>
       <input placeholder='username' onChange={(event)=>{setEmail(event.target.value)}}/>
      <input placeholder='password' onChange={(event)=>{setPass(event.target.value)}}/>
      <button onClick={authenticate}>login</button>
      <Link to="/SignUp">Sign Up</Link>
    </div>
  )
}
