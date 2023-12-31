import SignIn from "../Auth/SignIn"


// eslint-disable-next-line react/prop-types
export default function Modal({ auth,isModalActive, closeModal, setIsModalActive, setUser, errorMessage, setErrorMessage, clientList, userName, setUserName}) {
    //props passed from Navbar component

    return (
        <div>
            <div className={`modal ${isModalActive ? 'is-active' : ''}`}>
                <div className="modal-background is-primary"></div>
                <div className="modal-content">
                    <div className="card">
                        <div className="box">
                            <SignIn 
                            auth={auth}
                            setIsModalActive={setIsModalActive} 
                            isModalActive={isModalActive}
                            closeModal={closeModal} 
                            setUser={setUser} 
                            userName={userName} setUserName={setUserName}
                            // authUser={authUser} 
                            clientList={clientList}
                            errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>
                        </div>
                    </div>
                    <button className={`modal-close is-large`} onClick={closeModal}></button>
                </div>
            </div>

        </div>
    )
}

