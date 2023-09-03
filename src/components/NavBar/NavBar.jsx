import { useState } from "react"
import LogIn from "./LogIn";
import LoginBtn from "./LoginBtn";
import "../../Styles/Navbar.css"


export default function NavBar() {
    //usestate functions for login modal and hamburger menu
    const [isModalActive, setIsModalActive] = useState(false)
    const [isMenuActive, setIsMenuActive] = useState(false)
    const [user, setUser] = useState(null)

    const authUser = useAuthState()

    //close modal function
    const closeModal = () => {
        setIsModalActive(false);
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
                <LogIn isModalActive={isModalActive} closeModal={closeModal} setIsModalActive={setIsModalActive} />
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
                               <LoginBtn setIsModalActive={setIsModalActive}/>
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

