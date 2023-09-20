import { Link } from "react-router-dom"

export default function ProtectedDashboard({ setUser, authUser, userName}) {
  //props passed from Navbar

  // const user = authUser
  // console.log(user);
  return (
      authUser ? ( <Link className="navbar-item" to={`/${userName}/dashboard`}>
      Dashboard
    </Link>) : null  
  )
}
