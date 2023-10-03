// /* eslint-disable react/prop-types */
// import { useState} from "react"
// import { useNavigate } from "react-router-dom"
// import { FcGoogle } from "react-icons/fc"
// import { auth,googleProvider } from "../../services/config/firebase"
// import { signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth"


// // import axios from "axios"
// // const API = import.meta.env.VITE_API_URL;

// // signInWithRedirect(auth, new GoogleAuthProvider())
// // const provider = new GoogleAuthProvider();

// //Prop imports from Modal.jsx
// // eslint-disable-next-line react/prop-types


// export default function SignIn(
//   {
//     // auth,
//     errorMessage,
//     setErrorMessage,  
//     clientList,
//     setUser,
//     closeModal,
//     setIsModalActive,
//     // isModalActive,
//     // authUser,
//     // user,
//     // userId,
//     // setUserId,
//     userName,
//     setUserName,
//     // userEmail,
//     // setUserEmail,
//     // userProfilePicture,
//     // setUserProfilePicture,
//     // userRole,
//     // setUserRole,
//   }
// ) {

// // State variables for username and password capture-----------
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   // const { client_id } = useParams()

//   const navigate = useNavigate()

// // LogIn function -------------------------
//   const logIn = async (e) => {

//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, username, password)
//       // await setUser(auth.currentUser.email);
//       await clientList.map((el) => {
//         if (auth.currentUser.email === el.email) {
//           // setUserId(el.id)
//           // setUserName(el.username)
//           // setUserEmail(el.email)
//           // setUserProfilePicture(el.profile_picture)
//           // setUserRole(el.role)

//           setIsModalActive(false);
//           navigate(`/${userName}/dashboard`);
//           setUsername('');
//           setPassword('')
//           setErrorMessage('')
//         }
//       })

//       // console.log(auth.currentUser.getIdToken());
//       // console.log(auth.currentUser.email);


//     } catch (error) {
//       setErrorMessage('Invalid username or password');
//       setPassword('')
//       console.error('login error', error.message);
//     }
//   };



//  //RENDERED content below -------------------------------- 
//   return (
//     <div>
//       <form className="form" onSubmit={logIn}>
//         <label className="label is-flex is-justify-content-center">
//           <p className="is-size-3">Sign In</p>
//         </label>
//         <div className="field">
//           <p className="control">
//             <input
//               className={`input is-link`}
//               type="text"
//               value={username}
//               placeholder="Username"
//               onChange={(e) => setUsername(e.target.value)} />
//           </p>
//         </div>
//         <div className="field">
//           <p className="control ">
//             <input className={`input is-link`}
//               value={password}
//               type="password"
//               placeholder="Password"
//               onChange={(e) => setPassword(e.target.value)} />
//           </p>
//         </div>
//         <div className="errorMessage">
//           {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//         </div>
//         <div className="field is-flex is-justify-content-center">
//           <a>Forgot Your Password?</a>
//         </div>

//         <div className="field is-flex is-justify-content-center">
//           {/* <p className="control"> */}
//           <button className={`button is-white-ter`} onClick={closeModal}>Close</button>
//           <button className={`button is-link ml-2`}
//             type="submit">
//             Login
//           </button>

//           {/* </p> */}
//         </div>
//         <div className="field is-flex is-justify-content-center">
//           <p className="ml-2">Don`t have an account?</p>
//           <a className="ml-2" href="/signup">Sign up today!</a>
//         </div>
//         <hr></hr>
//         <div className="field is-flex is-justify-content-center">
//           <a className={`button is-white ml-2`} onClick={googleLogIn}>
//             <p>Sign in with</p> <FcGoogle className="ml-2" />
//           </a>
//         </div>
//       </form>
//     </div>
//   )
// }

//------------------Rebuild below -----------------------------

import { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate} from "react-router-dom";
import "./SignIn.css"

export default function SignIn() {
  const { signIn } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      setError("");
      setLoading(true);
      await signIn(email, password);
      navigate("/dashboard"); // Redirect to the dashboard on successful login
    } catch (error) {
      setError("Failed to sign in. Check your email and password.");
    }

    setLoading(false);
  }

  return (
    <div className="sign-in-container">
      <h2 className="sign-in-heading">Sign In</h2>
      {error && <div className="error-message">{error}</div>}
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input className="form-input" type="email" ref={emailRef} required />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input className="form-input" type="password" ref={passwordRef} required />
        </div>
        <div className="button-container">
        <button className="submit-button" type="submit" disabled={loading}>
          Sign In
        </button>
        </div>
      </form>
      <div className="sign-up-link">
        Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}
