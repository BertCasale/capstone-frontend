// import SignIn from "../Auth/SignIn"


// eslint-disable-next-line react/prop-types
export default function Modal({ isModalActive, closeModal, setIsModalActive, setUser, authUser, errorMessage, setErrorMessage }) {
    //props passed from Navbar component

    return (
        <div>
            <div className={`modal ${isModalActive ? 'is-active' : ''}`}>
                <div className="modal-background is-primary"></div>
                <div className="modal-content">
                    <div className="card">
                        <div className="box">
                            <SignIn setIsModalActive={setIsModalActive} closeModal={closeModal} setUser={setUser} authUser={authUser} errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>
                        </div>
                    </div>
                    <button className={`modal-close is-large`} onClick={closeModal}></button>
                </div>
            </div>

        </div>
    )
}

