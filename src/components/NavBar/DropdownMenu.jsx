import { Link } from "react-router-dom"
import { Card } from "react-bulma-components"
import SignOut from "../Auth/SignOut"
import { useAuth } from "../../contexts/AuthContext"; 

// eslint-disable-next-line react/prop-types
export default function DropdownMenu({setUser, setIsProfilePicMenuActive }) {
  
  // const auth = useAuth()
 
  // console.log(auth.currentUser.displayName);

  return (
    <div className="dropdown">
     <Card style={{ backgroundColor: 'lightgray', width: '100%' }}>
     <div>
       <ul>
         <li>
          <h4>{}</h4>
         </li>
         <hr/>
         <li>
          <Link>Profile</Link>
         </li>
         <li>
          <Link>Notifications</Link>
         </li>
         <hr/>
         <li>
          {<SignOut
          setUser={setUser} 
          setIsProfilePicMenuActive={setIsProfilePicMenuActive}
          />}
          </li>
       </ul>
       </div>
       </Card >
    </div>
  )
}
