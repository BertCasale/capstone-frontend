import { useState } from "react"
import LogIn from "./Modal";
import NavBarBtn from "./UserAuthBtn";
import ProtectedDashboard from "./ProtectedDashboard";
import useAuthState from "../../services/config/useAuthState";
import "../../Styles/Navbar.css"
import Modal from "./Modal";


// eslint-disable-next-line react/prop-types
export default function NavBar({user, setUser}) {
    //usestate functions for login modal and hamburger menu
    const [isModalActive, setIsModalActive] = useState(false)
    const [isMenuActive, setIsMenuActive] = useState(false)
    const [errorMessage, setErrorMessage] = useState("");
    

    const authUser = useAuthState()

    console.log(user, 'logged from NavBar');

    //close modal function
    const closeModal = () => {
        setIsModalActive(false);
        setErrorMessage('')
    }

    //toggle hamburger menu
    const handleMenuToggle = () => {
       setIsMenuActive(!isMenuActive)
       console.log('menu toggle status',isMenuActive)
       console.log(authUser.email);
    }

    return (
        <div>
            <div>
                <Modal isModalActive={isModalActive} closeModal={closeModal} setIsModalActive={setIsModalActive} authUser={authUser} user={user} setUser={setUser} errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>
            </div>

            <nav className="navbar ">
                <div className="container">
                    <div className="navbar-brand is-size-4">
                        <a className="navbar-item" href="/">Art Acorn</a>
                        <span className="navbar-burger" onClick= {handleMenuToggle} > 
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    {/* The navbar-menu state toggles visible menu in mobile mode- is-active */}
                
                    <div className={`navbar-menu  ${isMenuActive ? 'is-active' : ''}`} > 
                        <div className="navbar-end">
                            <ProtectedDashboard authUser={authUser} user={user} setUser={setUser}/>
                            <a className="navbar-item">
                                About Us
                            </a>
                            <a className="navbar-item" href="/hamster">
                                Hamster
                            </a>

                            <span className="navbar-item">
                               <NavBarBtn setIsModalActive={setIsModalActive} authUser={authUser} user={user} setUser={setUser}/>
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

