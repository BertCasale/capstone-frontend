// import { auth } from "../../services/config/firebase"
import { useState, useEffect } from "react"
import SignOut from "../Auth/SignOut";

// eslint-disable-next-line react/prop-types
export default function UserAuthBtn({ setIsModalActive, user, setUser}) {
  // setIsModalActive prop being passed from NavBar component

const [errorMessage, setErrorMessage] = useState("");

 const handleButtonState = () => {
 
  // if (isLoading) {
  //   return <p>Loading...</p>;
  // } else
   if (user) {
    return (
      <div>
        <p style={{ color: 'white' }}>{user}</p>
        <p style={{ color: 'white' }}>logged in</p>
        {/* <button onClick={handleLogout}>Logout</button> */}
        {/* Render the user profile icon here */}
        {/* <img
          src={user.photoURL || 'default-avatar.jpg'}
          alt="User Profile"
          width="50"
        /> */}
        <SignOut user={user} setUser={setUser}/>
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
