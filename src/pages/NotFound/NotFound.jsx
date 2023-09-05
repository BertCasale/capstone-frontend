import { Link } from "react-router-dom";
import sadSquirrel from "../../assets/images/sad_squirrel.jpeg"

export default function NotFound() {
  return (
    <section className="section is-medium">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column has-text-centered">
            <h1 className="title">404 Page Not Found</h1>
            <div className="column is-flex is-justify-content-center">
              <figure className="image is-128x128">
                <img src={sadSquirrel} />
              </figure>
            </div>
            <p className="subtitle">An unexpected error has occurred. Please contact the site owner.</p>
            <Link to={'/'} className="button is-rounded">Home</Link>
            <Link to={''} className="button is-rounded">Contact</Link>
          </div>
        </div>
      </div>
    </section>
  )
}