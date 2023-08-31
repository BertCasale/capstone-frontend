// import React, { useContext, useEffect, useState } from 'react'
// import { getAuth } from '../config/firebase'

// const AuthContext = React.createContext()

// export function useAuth(){
//   return useContext(AuthContext)
// } 


// // eslint-disable-next-line react/prop-types
// export function AuthProvider({children}) {

//   const [currentUser, setCurrentUser] = useState()

//   const signUp = (email, password) => {
//     auth.createUserWithEmailAndPassword(email, password)
//   }

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       setCurrentUser(user)
//     })
//     return unsubscribe
//   },[])
 
//   const value = {
//     currentUser,
//     signUp
//   }

//   return (
//    <AuthContext.Provider value={value}>
//     {children}
//    </AuthContext.Provider>
//   )
// }
