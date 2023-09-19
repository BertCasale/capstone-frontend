// import { createContext, useContext, useEffect, useState } from 'react';
// import { auth } from '../services/config/firebase'; // Import your Firebase authentication instance

// const AuthContext = createContext();

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const signUp = async (email, password) => {
//     return await createUserWithEmailAndPassword(auth, `${username}@domain.com`, password)
//   };

//   const signIn = async (email, password) => {
//     return auth.signInWithEmailAndPassword(email, password);
//   };

//   const signOut = () => {
//     return auth.signOut();
//   };

//   const resetPassword = (email) => {
//     return auth.sendPasswordResetEmail(email);
//   };

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });

//     return unsubscribe;
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
