/* eslint-disable react/prop-types */
import { useState } from "react"
import UserAuthBtn from "./UserAuthBtn";
import ProtectedDashboard from "./ProtectedDashboard";
// import useAuthState from "../../services/config/useAuthState";
import "../../Styles/Navbar.css"
import Modal from "./Modal";
import { Link } from "react-router-dom";



// eslint-disable-next-line react/prop-types
export default function NavBar(
    {
        userName,
        setUserName,
        userEmail,
        setUserEmail,
        userProfilePicture,
        setUserProfilePicture,
        clientList,
        user,
        setUser,
        userId,
        setUserId,
        authUser,
        userRole,
        setUserRole,
    }) {

    //usestate functions for login modal and hamburger menu
    const [isModalActive, setIsModalActive] = useState(false)
    const [isMenuActive, setIsMenuActive] = useState(false)
    const [errorMessage, setErrorMessage] = useState("");


    // const authUser = useAuthState()

    // console.log(user, 'user from NavBar');
    // console.log(authUser.email, 'authUser from NavBar');

    //close modal function
    const closeModal = () => {
        setIsModalActive(false);
        setErrorMessage('')
    }

    //toggle hamburger menu
    const handleMenuToggle = () => {
        setIsMenuActive(!isMenuActive)
        console.log('menu toggle status', isMenuActive)
        //    console.log(authUser.email);
    }

    return (
        <div>
            <div>
                <Modal
                    clientList={clientList}
                    isModalActive={isModalActive}
                    closeModal={closeModal}
                    setIsModalActive={setIsModalActive}
                    errorMessage={errorMessage}
                    setErrorMessage={setErrorMessage}
                    authUser={authUser}
                    user={user}
                    setUser={setUser}
                    userId={userId}
                    setUserId={setUserId}
                    userName={userName}
                    setUserName={setUserName}
                    userEmail={userEmail}
                    setUserEmail={setUserEmail}
                    userProfilePicture={userProfilePicture}
                    setUserProfilePicture={setUserProfilePicture}
                    userRole={userRole}
                    setUserRole={setUserRole}
                />
            </div>

            <nav className="navbar ">
                <div className="container">
                    <div className="navbar-brand is-size-4">
                        <Link className="navbar-item" to="/">Art Acorn</Link>
                        <span className="navbar-burger" onClick={handleMenuToggle} >
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    {/* The navbar-menu state toggles visible menu in mobile mode- is-active */}

                    <div className={`navbar-menu  ${isMenuActive ? 'is-active' : ''}`} >
                        <div className="navbar-end">
                            <ProtectedDashboard authUser={authUser} user={user} setUser={setUser} userName={userName} />
                            <Link className="navbar-item">
                                About Us
                            </Link>
                            <Link className="navbar-item" to="/hamster">

                            </Link>

                            <Link className="navbar-item" href="/sandbox">
                                Sandbox
                            </Link>

                            <span className="navbar-item">
                                <UserAuthBtn setIsModalActive={setIsModalActive} authUser={authUser} user={user} setUser={setUser} userName={userName} />
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

// const burgerMenu = document.querySelector('#navbar-menu');
// onClick={navbarMenu.classList.toggle('is-active')}

