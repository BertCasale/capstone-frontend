// import { createContext, useContext, useEffect, useState } from 'react';
// import { auth } from '../services/config/firebase'; // Import your Firebase authentication instance
// // import axios from 'axios';
// import { signInWithEmailAndPassword, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithRedirect, onAuthStateChanged } from 'firebase/auth';

// // const API = import.meta.env.VITE_API_URL;

// const AuthContext = createContext(null);

// export function useAuth(){
//   return useContext(AuthContext)
// }

// export const signUp = async (email, password) => {
//   await createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     const user = userCredential.user
//     console.log(user);
//   })
//   .catch((error)=> {
//     console.error(error)
//   })


// };

// export const signIn = async (email, password) => {
//   await signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential)=> {
//     const user = userCredential.user;
//     console.log(user);
//   })
//   .catch((error) => {
//     console.error(error)
//   })
// };

// export const googleLogIn = async () => {
//   await signInWithRedirect(auth, new GoogleAuthProvider())

// }

// const signOut = () => {
//   return auth.signOut();
// };

// const resetPassword = (email) => {
//   return auth.sendPasswordResetEmail(email);
// };

// //--------------------------------------------------

// // const loggedUser = () => {
// //   onAuthStateChanged(auth, (user) => {
// //    if(user) {
// //      const uid = user.uid
// //      console.log(`User with UID: ${uid} is signed in`);
// //      console.log(user);
// //    }else {
// //      //User is signed out
// //      console.log('User has been signed out');
// //    }
// //  })
// //----------------------------------------



// // eslint-disable-next-line react/prop-types
// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // const unsubscribe = 
//     auth.onAuthStateChanged((user) => {
//       if(user) {
//         setCurrentUser(user);
//         setLoading(false);
//         const uid = user.uid
//         console.log(`User with UID: ${uid} is signed in`);
//         console.log(user);
//       }else {
//         //User is signed out
//         console.log('User has been signed out');
//       }
     
//     });
//     //--------------------
//  // axios.get((`${API}/clients`) )

  
//   }, []);

//   const contextValue = {
//     currentUser,
//     signUp,
//     signIn,
//     signOut,
//     resetPassword,
//   };

//   return (
//     <AuthContext.Provider value={contextValue}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

//------------Rebuilt Below------------------

import { createContext, useContext, useEffect, useState } from "react";
// import { auth } from "../firebase/firebase"; // Firebase authentication module
import { auth } from "../services/config/firebase";
import { signInWithRedirect, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to sign up a new user
  async function signUp(email, password) {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error("Sign-up error", error);
      throw error;
    }
  }

  // Function to sign in an existing user
  async function signIn(email, password) {
    try {
      await signInWithEmailAndPassword(auth,email, password);
    } catch (error) {
      console.error("Sign-in error", error);
      throw error;
    }
  }
  
  async function googleLogIn() {
    try {
         await signInWithRedirect(auth, new GoogleAuthProvider())
        
    } catch (error) {
      console.error("Sign-in error", error);
      throw error;
    }
  }

  

  // Function to sign out the current user
  async function signOut() {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Sign-out error", error);
      throw error;
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    signIn,
    googleLogIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
