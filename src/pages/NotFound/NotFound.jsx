// import { Link } from "react-router-dom";


export default function NotFound() {
  return (
    <section className="section is-medium">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column has-text-centered">
            <h1 className="title">404 Page Not Found</h1>
            <p className="subtitle">An unexpected error has occurred. Please contact the site owner.</p>
            <a className="button">Home</a>
            <a className="button">Contact</a>
          </div>
        </div>
      </div>
    </section>
  )
}