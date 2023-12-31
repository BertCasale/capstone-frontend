import { Link } from "react-router-dom";
// import { auth } from "../../services/config/firebase";
import { useAuth } from "../../contexts/AuthContext";


// eslint-disable-next-line react/prop-types
export default function ProtectedDashboard({ textArray4, language }) {
  //props passed from Navbar
const auth = useAuth(); 

// if(auth ? console.log(auth.currentUser.displayName): null)

// console.log(auth.currentUser.displayName);

  return (
    auth.currentUser ? (
      <li className="navbar-item">
       <Link to="/dashboard">
          {textArray4[language - 1]}
        </Link>
      </li>
      ) : null
  )
}
