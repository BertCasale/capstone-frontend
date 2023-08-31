import SignUp from "../components/NavBar/SignUp"
import { Container } from 'react-bulma-components'

export default function SignUpPage() {
  return (
    <div>
      
        <h1>Sign Up</h1>
 
      <Container className="p-3">
        <SignUp />
      </Container>
    </div>
  )
}
