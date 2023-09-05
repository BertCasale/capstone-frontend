import { auth } from "./firebase";
import { signOut} from "firebase/auth"
import {useNavigate} from "react-router-dom"


export default function LogOut() {
 const navigate = useNavigate()

  async function logOut() {

    try {
      await signOut(auth);
      navigate('/')
      console.log('User has been logged out');
    } catch (error) {
      console.error ('Error while logging out', error);
    }
  }

  const handleLogOut = async () => {
    await logOut()
  };

  return (
    
      <div className="button is-rounded" onClick={handleLogOut}>Log Out</div>
    
  )
}




// import React from 'react'

// export default function LogOut() {
//   return (
//     <div>
      
//     </div>
//   )
// }
