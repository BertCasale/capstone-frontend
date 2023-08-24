

export default function LogIn({isActive, closeModal}) {
    //

    return (
        <div>
            <div className={`modal ${isActive ? 'is-active' : ''}`}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="card">
                        {/* <div className="box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ab.</div> */}
                        <div className="box">
                            <form className="form" onSubmit={console.log('logged in')}>
                                <label className="label">
                                    <p className="is-size-3">Sign In</p>
                                </label>
                                <div className="field">
                                    <p className="control has-icons-left has-icons-right">
                                        <input className="input is-link" type="text" placeholder="Username" />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-envelope"></i>
                                        </span>
                                        <span className="icon is-small is-right">
                                            <i className="fas fa-check"></i>
                                        </span>
                                    </p>
                                </div>
                                <div className="field">
                                    <p className="control has-icons-left">
                                        <input className="input is-link" type="password" placeholder="Password" />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-lock"></i>
                                        </span>
                                    </p>
                                </div>
                                <div className="field">
                                    <a>Forgot Your Password?</a>
                                </div>

                                <div className="field">
                                    {/* <p className="control"> */}
                                    <button className={`button is-white-ter`} onClick={closeModal}>Close</button>
                                    <button className={`button is-link`} type="submit">
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
