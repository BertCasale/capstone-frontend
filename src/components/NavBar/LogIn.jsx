import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
import { auth, googleProvider } from "../../services/config/firebase"
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth"


// eslint-disable-next-line react/prop-types
export default function LogIn({ isModalActive, closeModal, setIsModalActive, user, setUser}) {
    //props passed from Navbar component


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    // const [user, setUser] = useState(null);

    //variable to capture current auth user
    const currentUser = auth.currentUser



    const navigate = useNavigate()

    // console.log(currentUser); // log for testing - can be cleaned up later

    const logIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, `${username}@domain.com`, password);
            setIsModalActive(false)
            navigate('/dashboard');
            setUser(currentUser.email);


            console.log(`${currentUser.email} login successful`);

        } catch (error) {
            setErrorMessage('Invalid email or password');
            setPassword('')
            console.error('login error', error.message);
        }
    };

    const googleLogIn = async () => {
        await signInWithPopup(auth, googleProvider)
    };


    return (
        <div>
            <div className={`modal ${isModalActive ? 'is-active' : ''}`}>
                <div className="modal-background is-primary"></div>
                <div className="modal-content">
                    <div className="card">
                        <div className="box">
                            <form className="form" onSubmit={logIn}>
                                <label className="label is-flex is-justify-content-center">
                                    <p className="is-size-3">Sign In</p>
                                </label>
                                <div className="field">
                                    <p className="control">
                                        <input
                                            className={`input is-link`}
                                            type="text"
                                            value={username}
                                            placeholder="Username"
                                            onChange={(e) => setUsername(e.target.value)} />
                                    </p>
                                </div>
                                <div className="field">
                                    <p className="control ">
                                        <input className={`input is-link`}
                                            value={password}
                                            type="password"
                                            placeholder="Password"
                                            onChange={(e) => setPassword(e.target.value)} />
                                    </p>
                                </div>
                                <div className="errorMessage">
                                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                                </div>
                                <div className="field is-flex is-justify-content-center">
                                    <a>Forgot Your Password?</a>
                                </div>

                                <div className="field is-flex is-justify-content-center">
                                    {/* <p className="control"> */}
                                    <button className={`button is-white-ter`} onClick={closeModal}>Close</button>
                                    <button className={`button is-link ml-2`}
                                        type="submit">
                                        Login
                                    </button>

                                    {/* </p> */}
                                </div>
                                <div className="field is-flex is-justify-content-center">
                                    <p className="ml-2">Don`t have an account?</p>
                                    <a className="ml-2" href="/signup">Sign up today!</a>
                                </div>
                                <hr></hr>
                                <div className="field is-flex is-justify-content-center">
                                <a className={`button is-white ml-2`} onClick={googleLogIn}>
                                        <p>Sign in with</p> <FcGoogle className="ml-2" />
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <button className={`modal-close is-large`} onClick={closeModal}></button>
                </div>
            </div>

        </div>
    )
}

