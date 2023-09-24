// import { auth } from "../../services/config/firebase"
import SignOut from "../Auth/SignOut";
import { Link } from "react-router-dom";
import ProfilePic from "./ProfilePic";

// eslint-disable-next-line react/prop-types
export default function UserAuthBtn({ setIsModalActive, authUser, user, setUser, userName, setUserName }) {
  // setIsModalActive prop being passed from NavBar component

  // const user = authUser

  const handleButtonState = () => {

    // if (isLoading) {
    //   return <p>Loading...</p>;
    // } else
    if (authUser) {
      return (
        <div>
          <ProfilePic />
          {/* <SignOut user={user} setUser={setUser} authUser={authUser} /> */}
        </div>
      );
    } else {
      return (
        <button
          className={`button is-link-outlined is-rounded`}
          onClick={() => {
            setIsModalActive(true);
          }}
        >
          <span>Sign in</span>
        </button>
      );
    }
  }

  return (
    <div>
      {handleButtonState()}
    </div>
  )
}
