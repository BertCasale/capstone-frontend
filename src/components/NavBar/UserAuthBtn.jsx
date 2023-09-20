import { auth } from "../../services/config/firebase"
import SignOut from "../Auth/SignOut";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Image } from "react-bulma-components";

// eslint-disable-next-line react/prop-types
export default function UserAuthBtn({ setIsModalActive, authUser, user, setUser, userName}) 
  // setIsModalActive prop being passed from NavBar component

// const user = authUser
const { id } = useParams()

// // const user = authUser

// const user = authUser
const { id } = useParams()

 const handleButtonState = () => {
 
  // if (isLoading) {
  //   return <p>Loading...</p>;
  // } else
   if (authUser) {
    return (
      <div>
       <Link to={`/${ userName }/profile`} style={{ color: 'white' }}>
       <figure className="image is-large">
        <img className="image is-rounded is-large" src="https://avatars.dicebear.com/api/adventurer-neutral/mail%40ashallendesign.co.uk.svg"/>
        </figure>
          {/* {authUser.auth.currentUser.email} */}
          </Link>
        {/* <p style={{ color: 'white' }}>logged in</p> */}
        {/* <button onClick={handleLogout}>Logout</button> */}
        {/* Render the user profile icon here */}
        {/* <img src="https://avatars.dicebear.com/api/adventurer-neutral/mail%40ashallendesign.co.uk.svg"/> */}

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
//   // if (isLoading) {
//   //   return <p>Loading...</p>;
//   // } else
//    if (authUser) {
//     return (
//       <div>
//         {/* <p style={{ color: 'white' }}>{user}</p> */}
//         <p style={{ color: 'white' }}>logged in</p>
//         {/* <button onClick={handleLogout}>Logout</button> */}
//         {/* Render the user profile icon here */}
//         {/* <img
//           src={user.photoURL || 'default-avatar.jpg'}
//           alt="User Profile"
//           width="50"
//         /> */}
//         <SignOut user={user} setUser={setUser} authUser={authUser}/>
//       </div>
//     );
//   } else {
//     return (
//       <button
//         className={`button is-link-outlined is-rounded`}
//         onClick={() => {
//           setIsModalActive(true);
//         }}
//       >
//         <span>Sign in</span>
//       </button>
//     );
//   }
// }

//   return (
//     <div>
//       {handleButtonState()}  
//     </div>
//   )
// }
