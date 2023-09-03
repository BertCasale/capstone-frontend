// import { auth } from "../../services/config/firebase"
import { useState, useEffect } from "react"

// eslint-disable-next-line react/prop-types
export default function LoginBtn({ setIsModalActive, user, setUser}) {
  // setIsModalActive prop being passed from NavBar component

  // const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  return (
    <div>
      {isLoading ? (
        <p> Loading...</p>
      ) : user ? (
        <div>
          <p>Welcome, {user.displayName || user.email}</p>
          {/* <button onClick={handleLogout}>Logout</button> */}
          {/* Render the user profile icon here */}
          <img
            src={user.photoURL || 'default-avatar.jpg'}
            alt="User Profile"
            width="50"
          />
        </div>
      ) : (
        <button className={`button is-link-outlined is-rounded`} onClick={() => { setIsModalActive(true) }}>
        <span>Sign in</span>
      </button>
      )}
      
    </div>
  )
}
