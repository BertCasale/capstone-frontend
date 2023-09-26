import { createContext, useContext, useEffect, useState } from 'react';
 // Import your Firebase authentication instance && functions we need
 import { auth } from '../services/config/firebase'
 import { GoogleAuthProvider, signInWithRedirect, getRedirectResult } from 'firebase/auth';

// insantiate a reactContext
const AuthContext = createContext(null);
// expor cool react hook so we look slick
export const useAuth = () => {
  return useContext(AuthContext);
};
// 
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null)

  // const signUp = async (email, password) => {
  //   return await createUserWithEmailAndPassword(auth, `${username}@domain.com`, password)
  // };

  const signIn = async (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

 const signInWithGoogle = () => {
    try {
  //the signInWithPopUp() method accepts ANY provider we create. This is all our authentication logic
    signInWithRedirect(auth, new GoogleAuthProvider()).then((res) => {
        console.log(res)
    });
     } catch (err) {
      console.log(err), " line 33 authContext";
    }
  };

  const logOut = async () =>{
    try {
      await signOut(auth)
      alert("you've signed out - congrats.")
    } catch(err) {
      console.log(err)
    } 
}

  const signOut = () => {
    return auth.signOut();
  };

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  useEffect(() => {
    // this function will fire from the return of our use effect 
    // this is how we stop the auth from listening on acomponent listening forever
    const unsubscribeAuthStateChanged = auth.onAuthStateChanged((user) => {
      if(user) {
        setCurrentUser(user);
        setLoading(false);
      }

    });
  
    getRedirectResult(auth)
      .then((result) => {
        if(result) {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          setCurrentUser(user)
          setToken(token)
        }

        // Update your state/context with the user data if needed
      })
      .catch((error) => {
        alert(error + " this is from the line 72 in the context")  
        // Handle any errors if necessary
      });
  
    // this useEffect cleanup is not needed as Firebase will handle any cleanup on this 
    // to prevent a memory leak.  Leaving it here in the event we want to add logic
    return () => {
      unsubscribeAuthStateChanged(); // Unsubscribe from onAuthStateChanged
    };
  }, [])


// pass values to context 
  const contextValue = {
    currentUser,
    token,
    signIn,
    signInWithGoogle,
    signOut,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
