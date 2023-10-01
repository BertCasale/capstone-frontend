import HeroImage from "../assets/acorn_squirrel.png"
import {useNavigate} from "react-router-dom"

// {language} state from Landing.jsx
export default function Hero({language}) {

    // this function handles the start your first lesson button
    // needs to adjust useNav to correct route, /dashboard is a place holder
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate("/dashboard")
    }

    return (
        <div>

            <section className="hero is-white is-fullheight block">
                <div className="hero-head">

                </div>
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-hcentered">
                            <div className="column is-half">
                                <p className="title is-1 has-text-link">
                                    The free, fun and interactive way to learn art!
                                </p>
                                <p className="subtitle">
                                    Art is a universal language that goes beyond boundaries, expressing emotions, ideas, and perspectives.
                                </p>
                                <section className="features is-flex is-flex-direction-column ml-4">
                                    <p className="is-flex is-align-content-start">✅  Learn about lines and color mixing.</p>
                                    <p className="is-flex is-align-content-start">✅  Apply your learning within every lesson.</p>
                                    <p className="is-flex is-align-content-start">✅  Practice freely within the sandbox area.</p>
                                </section>
                                <br />
                                <section className="callToAction is-flex">
                                <button className="button is-link is-rounded" onClick={handleOnClick}>Start Your First Lesson Now!</button>
                                </section>
                            </div>
                            <div>
                                <div className="column ">
                                    <div className="card-image is-flex is-align-content-center">
                                        {/* <figure className="image is-256x256 is-inline-block"> */}
                                        <img src={HeroImage} alt="artsy acorn squirel" />
                                        {/* </figure> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
