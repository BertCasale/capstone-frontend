import { Link } from "react-router-dom";
import { auth } from "../../services/config/firebase";


// eslint-disable-next-line react/prop-types
export default function ProtectedDashboard() {
  //props passed from Navbar

  return (
    auth.currentUser ? (
      <li className="navbar-item">
        <Link to="/:username/dashboard">
          Dashboard
        </Link>
      </li>
      ) : null
  )
}
