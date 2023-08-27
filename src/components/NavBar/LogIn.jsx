

// eslint-disable-next-line react/prop-types
export default function LogIn({isActive, closeModal}) {
    //

    return (
        <div>
            <div className={`modal ${isActive ? 'is-active' : ''}`}>
                <div className="modal-background is-primary"></div>
                <div className="modal-content">
                    <div className="card">
                        {/* <div className="box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ab.</div> */}
                        <div className="box">
                            <form className="form" onSubmit={console.log('logged in')}>
                                <label className="label">
                                    <p className="is-size-3">Sign In</p>
                                </label>
                                <div className="field">
                                    <p className="control">
                                        <input className="input is-link" type="text" placeholder="Username" />
                                    </p>
                                </div>
                                <div className="field">
                                    <p className="control ">
                                        <input className="input is-link" type="password" placeholder="Password" />
                                    </p>
                                </div>
                                <div className="field">
                                    <a>Forgot Your Password?</a>
                                </div>

                                <div className="field ">
                                    {/* <p className="control"> */}
                                    <button className={`button is-white-ter`} onClick={closeModal}>Close</button>
                                    <button className={`button is-link ml-2`} type="submit">
                                        Login
                                    </button>

                                    {/* </p> */}
                                </div>
                                <div className="field is-flex is-justify-content-center">
                                    <p className="ml-2">Don`t have an account?</p>
                                    <a className="ml-2">Sign up today!</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <button className={`modal-close`} onClick={closeModal}>Close</button>
                </div>
            </div>

        </div>
    )
}
