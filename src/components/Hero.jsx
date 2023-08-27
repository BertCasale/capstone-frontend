import HeroImage from "../assets/acorn_squirrel.png"


export default function Hero() {

    return (
        <div>
           
            <section className="hero is-white is-fullheight block">
                <div className="hero-head">
                 
                </div>
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-hcentered">
                            <div className="column is-half">
                                <p className="title is-1 ">
                                    The free, fun and interactive way to learn art!
                                </p>
                                <p className="subtitle">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit dignissimos nam quae sit. Commodi dolorem, explicabo alias consequatur saepe nam!
                                </p>
                                <section className="features is-flex is-flex-direction-column ml-4">
                                <p className="is-flex is-align-content-start">✅  Learn about lines and color mixing</p>
                                <p className="is-flex is-align-content-start">✅  Apply your learning within every lesson</p>
                                <p className="is-flex is-align-content-start">✅  Practice freely within the sandbox area</p>
                                </section>
                                <br/>
                                <button className="button is-link is-rounded">Start Your First Lesson Now!</button>
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
