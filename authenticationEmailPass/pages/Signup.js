import React from 'react'
import {Link} from 'react-router-dom';

import {useState,useEffect} from 'react';
import {auth} from '../firebase-config'


import { createUserWithEmailAndPassword} from 'firebase/auth';
import { toast } from 'react-toastify';
export default function Signup() {

    const [registerEmail,setRegisterEmail]=useState("");
    const [registerPass,setRegisterPass]=useState("");
    const [user,setUser]=useState({});



    const register=async()=>{
        try{
     const user= await createUserWithEmailAndPassword(auth,registerEmail,registerPass);
    console.log(user);  
    console.log("success")
    toast("sucess");

        
    }catch(error){
            console.log(error.message)
        }
    };

  return (
    <div>
         <div>
       <input placeholder='username' onChange={(event)=>{setRegisterEmail(event.target.value)}}/>
      <input placeholder='password' onChange={(event)=>{setRegisterPass(event.target.value)}}/>
      <button onClick={register}>login</button>
      <Link to="/login">Login</Link>
    </div>
    </div>
  )
}

