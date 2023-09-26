import { useState } from "react"
import UserAuthBtn from "./UserAuthBtn";
import ProtectedDashboard from "./ProtectedDashboard";
// import useAuthState from "../../services/config/useAuthState";
import "../../Styles/Navbar.css"
import Modal from "./Modal";
import SignOut from "../Auth/SignOut";
import { Link } from "react-router-dom";
import { Menu, Dropdown, DropdownItem, Button } from "react-bulma-components";

//Prop imports from App.js
// eslint-disable-next-line react/prop-types
export default function NavBar({ user, setUser, clientList, userName, setUserName }) {

    //usestate functions for login modal and hamburger menu ------------
    const [isModalActive, setIsModalActive] = useState(false)
    const [isMenuActive, setIsMenuActive] = useState(false)
    const [errorMessage, setErrorMessage] = useState("");


    //close modal function ----------------
    const closeModal = () => {
        setIsModalActive(false);
        setErrorMessage('')
    }

    //toggle hamburger menu -------------------
    const handleMenuToggle = () => {
        setIsMenuActive(!isMenuActive)
        console.log('menu toggle status', isMenuActive)
        //    console.log(authUser.email);
    }

    //RENDERED Return Below -------------------------

    return (
        <div>
            <div>
                <Modal
                    isModalActive={isModalActive}
                    setIsModalActive={setIsModalActive}
                    closeModal={closeModal}
                    //   authUser={authUser}
                    user={user}
                    setUser={setUser}
                    clientList={clientList}
                    userName={userName}
                    setUserName={setUserName}
                    errorMessage={errorMessage}
                    setErrorMessage={setErrorMessage}
                />
            </div>

            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand is-size-3">
                        <li className="navbar-item">
                            <Link  to="/">
                                Art Acorn
                            </Link>
                        </li>
                        <span className="navbar-burger" onClick={handleMenuToggle}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>

                    <div
                        className={`navbar-menu ${isMenuActive ? 'is-active' : ''}`}
                    >
                        <div className="navbar-end">
                            <ProtectedDashboard
                                // authUser={authUser}
                                user={user}
                                setUser={setUser}
                            />
                            <li className="navbar-item">
                                <Link >
                                    About Us
                                </Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/sandbox">
                                    Sandbox
                                </Link>
                            </li>
                            <li>
                                {/* <Link> */}
                            <UserAuthBtn 
                            
                                // setIsModalActive={setIsModalActive}
                                // setIsProfilePicMenuActive={setIsProfilePicMenuActive}
                                // authUser={authUser}
                                user={user}
                                setUser={setUser}
                                userName={userName}
                                setUserName={setUserName}
                            />
                            {/* </Link> */}
                            </li>
                        </div>
                    </div>

                    <div className="profilePic">
                        
                        {/* <div > className="menu-burger" onClick={handleProfilePicToggle} */}
                           
                        {/* </div> */}
                    </div>
                </div>
            </nav>

            {/* Separate Menu Container */}
            
        </div>
    );


}
//--------------------------------------------
// const burgerMenu = document.querySelector('#navbar-menu');
// onClick={navbarMenu.classList.toggle('is-active')}

