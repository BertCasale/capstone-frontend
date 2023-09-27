import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../services/config/firebase'; // Import your Firebase authentication instance
// import axios from 'axios';
import { getRedirectResult, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';

// const API = import.meta.env.VITE_API_URL;

const AuthContext = createContext(null);

export function useAuth(){
  return useContext(AuthContext)
}

export const signUp = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
  // .then((userCredentials) => {
  //   const user = userCredentials.user
  // })
  // .catch((error) => {
  //   console.error(error)
  // })
};

export const signIn = async (email, password) => {
  auth.signInWithEmailAndPassword(email, password)
  // .then((userCredentials) => {
  //   const user = userCredentials.user;
  // })
  // .catch((error) => {
  //   console.error(error)
  // })
};

const signOut = () => {
  return auth.signOut();
};

const resetPassword = (email) => {
  return auth.sendPasswordResetEmail(email);
};

//--------------------------------------------------



export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const unsubscribe = 
    auth.onAuthStateChanged((user) => {
      console.log("context Auth");
      // debugger
      setCurrentUser(user);
      
     
    setLoading(false);
    });
    //------------------------ Google Auth using redirect
    // getRedirectResult(auth)
    // .then((result) => {
    //   const user = result.user;
    //   // This gives you a Google Access Token. You can use it to access Google APIs.
    //   // const credential = GoogleAuthProvider.credentialFromResult(result);
    //   // const token = credential.accessToken; 
    //   // set state variable for currentUser 
    //   setCurrentUser(user)
    //    // The signed-in user info.
   
    // })
    // .catch((error) =>{
    //   console.error(error)
    // })
    //--------------------
 // axios.get((`${API}/clients`) )

    // return unsubscribe;
  }, []);

  const contextValue = {
    currentUser,
    signUp,
    signIn,
    signOut,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
