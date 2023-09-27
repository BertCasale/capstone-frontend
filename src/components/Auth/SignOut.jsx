import { auth } from "../../services/config/firebase";
import { signOut} from "firebase/auth"
import {useNavigate} from "react-router-dom"


// eslint-disable-next-line react/prop-types, no-unused-vars
export default function SignOut({user, setUser, setIsProfilePicMenuActive}) {
 const navigate = useNavigate()

// Signout/Logout function ------------------- 
  async function logOut() {
    try {
      await signOut(auth);
      setUser(null)
      navigate('/')
      setIsProfilePicMenuActive(false)
      console.log('User has been logged out');
      console.log(auth);
    } catch (error) {
      console.error ('Error while logging out', error);
    }
  }

// handle click function ------------------  
  const handleSignOut = async () => {
    await logOut()
  };

  return (
      <div 
       
      onClick={handleSignOut}>
        Log Out
        </div>
  )
}
