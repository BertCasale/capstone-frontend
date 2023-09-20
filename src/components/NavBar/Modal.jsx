/* eslint-disable react/prop-types */
import SignIn from "../Auth/SignIn"


// eslint-disable-next-line react/prop-types
export default function Modal(
    {
        clientList,
        isModalActive,
        closeModal,
        setIsModalActive,
        errorMessage,
        setErrorMessage,
        authUser,
        user,
        setUser,
        userId,
        setUserId,
        userName,
        setUserName,
        userEmail,
        setUserEmail,
        userProfilePicture,
        setUserProfilePicture,
        userRole,
        setUserRole,
    }
) {
    //props passed from Navbar component

    return (
        <div>
            <div className={`modal ${isModalActive ? 'is-active' : ''}`}>
                <div className="modal-background is-primary"></div>
                <div className="modal-content">
                    <div className="card">
                        <div className="box">
                            <SignIn
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
                    </div>
                    <button className={`modal-close is-large`} onClick={closeModal}></button>
                </div>
            </div>

        </div>
    )
}

