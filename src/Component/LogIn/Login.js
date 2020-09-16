import React from "react";
import { Button } from "react-bootstrap";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebase.Config";

const Login = () => {
  firebase.initializeApp(firebaseConfig);


  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(user.displayName)
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
      
  };
  const handleFaceBookSignIn = ()=>{
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });

}
  return (
    <div className="container">
      <h1> This is my Login Area</h1>
      <Button onClick={handleGoogleSignIn}> Sign in With your Google account </Button> <br/> <br/>
      <Button onClick={handleFaceBookSignIn}> Sign in With your Facebook account </Button>
    </div>
  );
};

export default Login;
