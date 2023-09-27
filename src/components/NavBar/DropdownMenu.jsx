import { Link } from "react-router-dom"
import { Card } from "react-bulma-components"
import SignOut from "../Auth/SignOut"

// eslint-disable-next-line react/prop-types
export default function DropdownMenu({setUser, setIsProfilePicMenuActive }) {

  return (
    <div className="dropdown">
     <Card style={{ backgroundColor: 'lightgray', width: '100%' }}>
     <div>
       <ul>
         <li>
          <h4>User Name</h4>
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
