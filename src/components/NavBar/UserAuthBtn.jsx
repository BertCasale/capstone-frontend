// import { auth } from "../../services/config/firebase"
import SignOut from "../Auth/SignOut";
import { Link } from "react-router-dom";
import ProfilePic from "./ProfilePic";
import { auth } from "../../services/config/firebase";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function UserAuthBtn({ setIsModalActive, user, setUser, userName, setUserName }) {
  // setIsModalActive prop being passed from NavBar component

 

  const handleButtonState = () => {

    if (auth.currentUser) {
      return (
      
          <ProfilePic />
         
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
  }

  return (
    
      handleButtonState()
   
  )
}


  