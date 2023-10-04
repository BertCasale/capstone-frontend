
import ProfilePic from "./ProfilePic";
import { auth } from "../../services/config/firebase";
import { useAuth } from "../../contexts/AuthContext";

// setIsModalActive prop being passed from NavBar component
// eslint-disable-next-line react/prop-types
export default function UserAuthBtn({ setIsModalActive, user, userDetails, setUser, userName, setUserName, language }) {

  const auth = useAuth()

  const textArray1 = [
    "Sign in",
    "登录",
    "登入",
    "Iniciar Sesión",
    "تسجيل الدخول",
    "Entrar",
    "Masuk",
    "Se Connecter",
    "サインイン",
    "Войти",
    "Anmelden",
  ];

  // handles the state of the nav-item login/profile Avatar button--------
  const handleButtonState = () => {

    if (auth.currentUser) {
      return (
        <ProfilePic setUser={setUser} />
      );
    } else {
      return (
        <button
          className={`button is-link-outlined is-rounded`}
          onClick={() => {
            setIsModalActive(true)
          }}
        >
          <span>{textArray1[language - 1]}</span>
        </button>
      );
    }
  };


  //RENDERED return below----------------
  return (
    handleButtonState()
  )
}


