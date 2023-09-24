import { useState } from "react"
import UserAuthBtn from "./UserAuthBtn";
import ProtectedDashboard from "./ProtectedDashboard";
// import useAuthState from "../../services/config/useAuthState";
import "../../Styles/Navbar.css"
import Modal from "./Modal";
import SignOut from "../Auth/SignOut";
import { Link } from "react-router-dom";
import { Menu } from "react-bulma-components";


// eslint-disable-next-line react/prop-types
export default function NavBar({ user, setUser, authUser, clientList }) {

    //usestate functions for login modal and hamburger menu
    const [isModalActive, setIsModalActive] = useState(false)
    const [isMenuActive, setIsMenuActive] = useState(false)
    const [errorMessage, setErrorMessage] = useState("");
    const [userName, setUserName] = useState(null)


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

    //handling profile pic menu-----------

    const [isProfilePicMenuActive, setIsProfilePicMenuActive] = useState(false)

    const handleProfilePicToggle = () => {
        setIsProfilePicMenuActive(!isProfilePicMenuActive)
        console.log('menu toggle status', isProfilePicMenuActive)
        //    console.log(authUser.email);
    }
    //----------------------------

    // return (
    //     <div>
    //         <div>
    //             <Modal
    //                 isModalActive={isModalActive} setIsModalActive={setIsModalActive}
    //                 closeModal={closeModal}
    //                 authUser={authUser}
    //                 user={user} setUser={setUser}
    //                 clientList={clientList}
    //                 userName={userName} setUserName={setUserName}
    //                 errorMessage={errorMessage} setErrorMessage={setErrorMessage}
    //             />
    //         </div>

    //         <nav className="navbar ">
    //             <div className="container">
    //                 <div className="navbar-brand is-size-3">
    //                     <Link className="navbar-item" to="/">Art Acorn</Link>
    //                     <span className="navbar-burger" onClick={handleMenuToggle} >
    //                         <span></span>
    //                         <span></span>
    //                         <span></span>
    //                     </span>
    //                 </div>
    //                 {/* The navbar-menu state toggles visible menu in mobile mode- is-active */}

    //                 <div className={`navbar-menu  ${isMenuActive ? 'is-active' : ''}`} >
    //                     <div className="navbar-end">
    //                         <ProtectedDashboard authUser={authUser} user={user} setUser={setUser} />
    //                         <Link className="navbar-item">
    //                             About Us
    //                         </Link>
    //                         {/* <a className="navbar-item" href="/hamster">
    //                             Hamster
    //                         </a> */}
    //                         <Link className="navbar-item" to="/sandbox">
    //                             Sandbox
    //                         </Link>
    //                     </div>
    //                 </div>
    //                 {/* <span className="navbar-item">
    //                     <UserAuthBtn
    //                         setIsModalActive={setIsModalActive}
    //                         authUser={authUser}
    //                         user={user} setUser={setUser}
    //                         userName={userName} setUserName={setUserName}
    //                     />
    //                 </span> */}

    //                 <div className="profilePic">
    //                     <div className="menu-burger" onClick={handleProfilePicToggle}>
    //                         {/* Your button or icon to toggle the menu */}
    //                         <UserAuthBtn
    //                             setIsModalActive={setIsModalActive}
    //                             authUser={authUser}
    //                             user={user}
    //                             setUser={setUser}
    //                             userName={userName}
    //                             setUserName={setUserName}
    //                         />
    //                     </div>
    //                     </div>
    //                     {isMenuActive && (
    //                         <div className="menu">
    //                             {/* Your collapsible menu content */}
    //                             <Menu>
    //                                 <Menu.List>
    //                                     <Menu.List.Item>Profile</Menu.List.Item>
    //                                     <Menu.List.Item>Profile</Menu.List.Item>
    //                                 </Menu.List>
    //                             </Menu>

    //                         </div>
    //                     )}
                   
    //             </div>
    //         </nav>
    //     </div>
    // )


    //---------------------------

    return (
        <div>
          <div>
            <Modal
              isModalActive={isModalActive}
              setIsModalActive={setIsModalActive}
              closeModal={closeModal}
              authUser={authUser}
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
                <Link className="navbar-item" to="/">
                  Art Acorn
                </Link>
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
                    authUser={authUser}
                    user={user}
                    setUser={setUser}
                  />
                  <Link className="navbar-item">About Us</Link>
                  <Link className="navbar-item" to="/sandbox">
                    Sandbox
                  </Link>
                </div>
              </div>
      
              <div className="profilePic">
                <div className="menu-burger" onClick={handleProfilePicToggle}>
                  <UserAuthBtn
                    setIsModalActive={setIsModalActive}
                    authUser={authUser}
                    user={user}
                    setUser={setUser}
                    userName={userName}
                    setUserName={setUserName}
                  />
                </div>
              </div>
            </div>
          </nav>
      
          {/* Separate Menu Container */}
          {isProfilePicMenuActive && (
            <div className="menu-container">
              <div className="menu">
                {/* Your collapsible menu content */}
                <Menu>
                  <Menu.List>
                    <Menu.List.Item>
                        <Link to="/:username/profile">Profile</Link>
                        </Menu.List.Item>
                    <Menu.List.Item>
                         <SignOut user={user} setUser={setUser} authUser={authUser} />
                    </Menu.List.Item>
                  </Menu.List>
                </Menu>
              </div>
            </div>
          )}
        </div>
      );
      
      
}
//--------------------------------------------
// const burgerMenu = document.querySelector('#navbar-menu');
// onClick={navbarMenu.classList.toggle('is-active')}