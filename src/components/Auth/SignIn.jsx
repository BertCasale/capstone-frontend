
//------------------Rebuild below -----------------------------

import { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate} from "react-router-dom";
import "./SignIn.css"

// eslint-disable-next-line react/prop-types
export default function SignIn({isModalActive, setIsModalActive, closeModal}) {
  const { signIn } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      setError("");
      setLoading(true);
      await signIn(email, password);
      setIsModalActive(!isModalActive);
      navigate("/dashboard"); // Redirect to the dashboard on successful login
    } catch (error) {
      setError("Failed to sign in. Check your email and password.");
    }

    setLoading(false);
  }

  return (
    <div className="sign-in-container">
      <h2 className="sign-in-heading">Sign In</h2>
      {error && <div className="error-message">{error}</div>}
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input className="form-input" type="email" ref={emailRef} required />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input className="form-input" type="password" ref={passwordRef} required />
        </div>
        <div className="button-container">
        <button className="submit-button" type="submit" disabled={loading}>
          Sign In
        </button>
        </div>
      </form>
      <div className="sign-up-link" onClick={closeModal}>
        Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}
