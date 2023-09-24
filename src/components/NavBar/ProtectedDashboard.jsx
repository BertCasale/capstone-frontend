import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
export default function ProtectedDashboard({ authUser}) {
  //props passed from Navbar

  // const user = authUser
  // console.log(user);
  return (
      authUser ? ( <Link className="navbar-item" to="/dashboard">
      Dashboard
    </Link>) : null  
  )
}
