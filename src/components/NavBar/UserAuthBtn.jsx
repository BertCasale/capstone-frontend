// // import { auth } from "../../services/config/firebase"
// import SignOut from "../Auth/SignOut";

// // eslint-disable-next-line react/prop-types
// export default function UserAuthBtn({ setIsModalActive, authUser, user, setUser}) {
//   // setIsModalActive prop being passed from NavBar component

// // const user = authUser

// const user = authUser

 const handleButtonState = () => {
 
  // if (isLoading) {
  //   return <p>Loading...</p>;
  // } else
   if (authUser) {
    return (
      <div>
        <p style={{ color: 'white' }}>{authUser.auth.currentUser.email}</p>
        <p style={{ color: 'white' }}>logged in</p>
        {/* <button onClick={handleLogout}>Logout</button> */}
        {/* Render the user profile icon here */}
        {/* <img
          src={user.photoURL || 'default-avatar.jpg'}
          alt="User Profile"
          width="50"
        /> */}
        <SignOut user={user} setUser={setUser} authUser={authUser}/>
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
