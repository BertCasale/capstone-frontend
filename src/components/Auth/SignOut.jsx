// import { auth } from "../../services/config/firebase";
// import { signOut} from "firebase/auth"
// import {useNavigate} from "react-router-dom"


// // eslint-disable-next-line react/prop-types, no-unused-vars
// export default function SignOut({user, setUser}) {
//  const navigate = useNavigate()

//   async function logOut() {

//     try {
//       await signOut(auth);
//       setUser(null)
//       navigate('/')
//       console.log('User has been logged out');
//     } catch (error) {
//       console.error ('Error while logging out', error);
//     }
//   }

//   const handleSignOut = async () => {
//     await logOut()
//   };

//   return (
    
//       <div className="button is-rounded" onClick={handleSignOut}>Log Out</div>
    
//   )
// }
