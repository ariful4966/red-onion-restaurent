import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { useState, createContext } from "react";
import { useContext } from 'react';
import { useEffect } from 'react';


firebase.initializeApp(firebaseConfig);
const AuthContext = createContext();
export const AuthContextProvider = (props) =>{
    const auth= Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}
export const useAuth = () => useContext(AuthContext);
const Auth = () =>{
    const [user, setUser] = useState(null);
 
    const getUser = user =>{
        const {displayName, email, photoURL} = user;
        return {name: displayName, email, photo:photoURL};
       
    }
    const signInWithGoogle = () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res =>{
            const signedInUser = getUser(); 
          setUser(signedInUser);
            return res.user
       })
       .catch(err =>{
      
           setUser(null)
           return err.message;
       })
    }
    const signOut = () =>{
        firebase.auth().signOut().then(function() {
            setUser(null);
          }).catch(function(error) {
            console.log(error)
          });
    }
    useEffect(() =>{
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
             const currUser = getUser(user);
             setUser(currUser);
            } else {
              // No user is signed in.
            }
          });
    },[])
    return {
        user,
        signInWithGoogle,
        signOut
    }
    
};

export default Auth;
