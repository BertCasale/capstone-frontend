import { useState } from "react"
// import UserAuthBtn from "./UserAuthBtn";
import ProtectedDashboard from "./ProtectedDashboard";
import "../../Styles/Navbar.css"
import Modal from "./Modal";
import { Link } from "react-router-dom";
import LanguageButton from "./LanguageButton";
import "./NavBar.css"
import logo from "../../assets/images/logo.png"
import DropdownMenu from "./DropdownMenu";


//Prop imports from App.js
// eslint-disable-next-line react/prop-types
// language state from App.js
// eslint-disable-next-line react/prop-types
export default function NavBar({ auth, user, userDetails, setUser, clientList, userName, setUserName, language, setLanguage }) {

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

    // State to manage the visibility of the dropdown menu
    // const [isDropdownActive, setIsDropdownActive] = useState(false);

    // Function to toggle the dropdown menu
    // const toggleDropdown = () => {
    //     setIsDropdownActive(!isDropdownActive);
    // };

    //RENDERED Return Below -------------------------

    const textArray1 = [
        "Art Acorn",
        "艺术橡果",
        "藝術橡果",
        "Bellota de Arte",
        "بلف الفن",
        "Bolota de Arte",
        "Biji Akar Seni",
        "Gland d'Art",
        "アート・エイコーン",
        "Искусство желудя",
        "Kunst-Eichel",
    ];
    const textArray2 = [
        "About Us",
        "关于我们",
        "關於我們",
        "Acerca de Nosotros",
        "حولنا",
        "Sobre Nós",
        "Tentang Kami",
        "À Propos de Nous",
        "私たちについて",
        "О Нас",
        "Über Uns",
    ];
    const textArray3 = [
        "Sandbox",
        "沙盒",
        "沙盒",
        "Caja de Arena",
        "صندوق الرمل",
        "Caixa de Areia",
        "Kotak Pasir",
        "Bac à Sable",
        "砂場",
        "Песочница",
        "Sandkasten",
    ];

    return (
        <div>
            <div>
                <Modal
                    isModalActive={isModalActive}
                    setIsModalActive={setIsModalActive}
                    closeModal={closeModal}
                    auth={auth}
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
                    <div className="navbar-brand is-size-5">
                        {/* <li className="navbar-item"> */}
                        <img className="img" src={logo} alt='logo' />
                        {/* </li> */}
                        <li className="navbar-item">
                            <Link to="/">
                                {textArray1[language - 1]}
                            </Link>
                        </li>
                        <span className="navbar-burger" onClick={handleMenuToggle}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>

                    <div className={`navbar-menu ${isMenuActive ? 'is-active' : ''}`}>
                        <div className="navbar-end">
                            <ProtectedDashboard
                                user={user}
                                setUser={setUser}
                            />

                            <li className="navbar-item">
                                <Link to="/sandbox">
                                    {textArray3[language - 1]}
                                </Link>
                            </li>
                            <li className="navbar-item">
                                <Link >
                                    {textArray2[language - 1]}
                                </Link>
                            </li>
                            <li className="lang">
                                <LanguageButton
                                    className="button"
                                    language={language}
                                    setLanguage={setLanguage}
                                />
                            </li>
                        </div>
                    </div>
                    <DropdownMenu auth={auth}
                user={user}
                userDetails={userDetails}
                setUser={setUser}
                userName={userName}
                setUserName={setUserName}
                setIsModalActive={setIsModalActive}
                language={language}/>
                </div>
            </nav>
        </div>
    );
}