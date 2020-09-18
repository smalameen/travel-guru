import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { Link } from 'react-router-dom';
import "../../Component/LogIn/Validation.css"



const Validation = () => {
  const [newUser, setNewUser] =  useState(false);
  const [user, setUser] = useState({
    isSignIn : false, 
    email : '',
    name : '',
    photoURL : '',

  })
 
  const handleInputFiled =(event)=> {
    let ifTheFormIsValid = true;
    console.log(event.target.name, event.target.value)
 
    if(event.target.name === "email"){
     ifTheFormIsValid= /\S+@\S+\.\S+/.test(event.target.value);
    }
 
    if(event.target.name === "password"){
     ifTheFormIsValid = event.target.value.length > 4;
   } 
   if (ifTheFormIsValid){
     const newUserInfo = {...user};
     newUserInfo[event.target.name] = event.target.value;
     setUser(newUserInfo);
   }
   
  }
  const handleSubmit = (event)=> {

    if(user.email && user.password){ 
                         //This lien is from firebase website!!!!
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const newUserInfo = {...user}
        newUserInfo.error = ''
        newUserInfo.success = true;
        setUser(newUserInfo);
      })
      .catch(error => {
        const newUserInfo = {...user}
  
        newUserInfo.error = error.message;
        newUserInfo.success = false;
  
        setUser(newUserInfo);
      });
      
    }
    event.preventDefault();
  }
    return (
      <div className="align-items-center">
     <input type="checkbox" onChange = {()=>setNewUser(!newUser)} name="newUser"/>
     <label variant="h1" htmlFor="newUser"> New commer's Sign in</label> <br/> <br/>
    
    <form action="">
      {newUser && <input name="name" type="text" onBlur = {handleInputFiled} placeholder="Your Name"/>} <br/> <br/>

      <input type="text" name="email"  onBlur = {handleInputFiled} placeholder="Your email address" required/>
      <br/>  <br/>
      <input type="password" name="password" onBlur = {handleInputFiled}  placeholder="Your password" required/>
      <br/>  <br/>
      <button className="btn btn-danger" onClick = {handleSubmit}>Submit</button>
    </form>
     <p style ={{color: 'red'}}>{user.error}</p>
     {user.success && <button href="/destination">Go to Details</button>}

    </div>
      

    );
};

export default Validation;