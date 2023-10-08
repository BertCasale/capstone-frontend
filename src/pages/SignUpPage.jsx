// import SignUp from "../components/NavBar/SignUp"
import { Container } from 'react-bulma-components'
import SignUp from "../components/Auth/SignUp"

export default function SignUpPage() {
  return (
    <div className='signup-container'>
      
        <h1 className='title ml-6'>Sign Up</h1>
 
      <Container className="p-3">
        <SignUp />
      </Container>
    </div>
  )
}
