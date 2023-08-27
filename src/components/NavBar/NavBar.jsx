import { useState } from "react"
import LogIn from "./LogIn";

export default function NavBar() {
    const [isActive, setIsActive] = useState(false)
    const [isMenuActive, setIsMenuActive] = useState(false)

    const closeModal = () => {
        setIsActive(false);
    }

    const handleMenuToggle = () => {
       setIsMenuActive(!isMenuActive)
       console.log(isMenuActive)
    }

    return (
        <div>
            <div>
                <LogIn isActive={isActive} closeModal={closeModal} />
            </div>

            <nav className="navbar  ">
                <div className="container">
                    <div className="navbar-brand is-size-4">
                        <a className="navbar-item">Art Acorn</a>
                        <span className="navbar-burger" onClick= {handleMenuToggle} > 
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    {/* The navbar-menu state toggles visible menu in mobile mode- is-active */}
                
                    <div className={`navbar-menu  ${isMenuActive ? 'is-active' : ''}`} > 
                        <div className="navbar-end">
                            <a className="navbar-item">
                                Dashboard
                            </a>
                            <a className="navbar-item">
                                About Us
                            </a>
                            <a className="navbar-item">
                                Contact
                            </a>

                            <span className="navbar-item">
                                <button className={`button is-link is-rounded`} onClick={() => { setIsActive(true) }}>
                                    <span>Sign in</span>
                                </button>
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

