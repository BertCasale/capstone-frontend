

export default function NavBar() {
    return (
        <div>
            <nav className="navbar card has-background-lighter ">
                <div className="container">
                    <div className="navbar-brand is-size-4">
                        <a className="navbar-item">Art Acorn</a>
                        <span className="navbar-burger" data-target="navbarMenuHeroB">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navbarMenuHeroB" className="navbar-menu">
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
