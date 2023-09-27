import { Link } from "react-router-dom";
// import { auth } from "../../services/config/firebase";
import { useAuth } from "../../contexts/AuthContext";


// eslint-disable-next-line react/prop-types
export default function ProtectedDashboard() {
  //props passed from Navbar
const auth = useAuth(); 

  console.log(auth.currentUser);

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
