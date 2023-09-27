
import ProfilePic from "./ProfilePic";
import { auth } from "../../services/config/firebase";
import { useAuth } from "../../contexts/AuthContext";

// setIsModalActive prop being passed from NavBar component
// eslint-disable-next-line react/prop-types
export default function UserAuthBtn({ setIsModalActive, user, setUser, userName, setUserName }) {
  
const auth = useAuth()

// handles the state of the nav-item login/profile Avatar button--------
  const handleButtonState = () => {

    if (auth.currentUser) {
      return (
          <ProfilePic setUser={setUser} />
      );
    } else {
      return (
        <button
          className={`button is-link-outlined is-rounded`}
          onClick={() => {
            setIsModalActive(true)
          }}
        >
          <span>Sign in</span>
        </button>
      );
    }
  };


  //RENDERED return below----------------
  return (
      handleButtonState()  
  )
}


  