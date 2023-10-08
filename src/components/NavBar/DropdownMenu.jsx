import { Link } from "react-router-dom"
import SignOut from "../Auth/SignOut"
// import { useAuth } from "../../contexts/AuthContext"; 
import { useState, useEffect } from "react";
import UserAuthBtn from "./UserAuthBtn";
import "./DropDownMenu.css"

// eslint-disable-next-line react/prop-types
export default function DropdownMenu({setUser, setIsProfilePicMenuActive, auth,user,userDetails,userName,setUserName,setIsModalActive,language}) {
  

    // State to manage the visibility of the dropdown menu
    const [isDropdownActive, setIsDropdownActive] = useState(false);

    // Function to toggle the dropdown menu
    const toggleDropdown = () => {
      setIsDropdownActive(!isDropdownActive);
    };

 //Close profile Menu on outide click------------------
 useEffect(() => {
  const closeMenuOnOutsideClick = (e) => {
    if (isDropdownActive && !e.target.closest('.nav-link-container.dropdown')) {
      setIsDropdownActive(false);
    }
  };
  document.addEventListener('click', closeMenuOnOutsideClick);

  return () => {
    document.removeEventListener('click', closeMenuOnOutsideClick);
  };
}, [isDropdownActive]);

  // const auth = useAuth()
 
  // console.log(auth.currentUser.displayName);

  return (
    <div className="nav-link-container dropdown" onClick={toggleDropdown} >

            <div className="dropdown">
              <div className="user">
                <UserAuthBtn
                auth={auth}
                user={user}
                userDetails={userDetails}
                setUser={setUser}
                userName={userName}
                setUserName={setUserName}
                setIsModalActive={setIsModalActive}
                language={language}
                />
              </div>
              <div className={`dropdown-menu ${isDropdownActive ? "active" : ""}`}>
                <div className="dropdown-item"><Link to="profile">Profile</Link></div>
                
                <div className="dropdown-item"><Link to="#">Notifications</Link></div>
                <hr />
                <div className="dropdown-item"> {<SignOut
         setUser={setUser} 
          setIsProfilePicMenuActive={setIsProfilePicMenuActive}
          />}</div>
                
              </div>
            </div>
          </div>
  )
}
