import { Button, Form } from 'react-bulma-components'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const API = import.meta.env.VITE_API_URL;

// import { useAuth } from '../../contexts/AuthContexts'

console.log(API)
export default function SignUp() {


  const navigate = useNavigate()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [client, setClient] = useState({
    registration_datetime: '2023-09-12T01:59:14.000Z',
    username: '',
    email: 'email@example.com',
    password: '',
    profile_picture: 'none',
    role: 'student',
  });



  const newClient = async () => { // Make it async
    try {
      await axios.post(`${API}/clients`, client); // Use client object directly
      // navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  }
  // const [errorMessage, setErrorMessage] = useState('');


  //---------------------------------------
 
//-------------------------------------------------
//used for testing


//-----------------------

  const handleTextChange = (e) => {
    setClient({...client, [e.target.id]: e.target.value })
  }

  return (
    <form className='form' onSubmit={null}>
      <Form.Control>
        <Form.Field>
          <Form.Input
            id='username'
            type='text'
            value={client.username}
            color="link"
            placeholder='Username'
            // onChange={(e) => setUsername(e.target.value)}
            onChange={handleTextChange}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            id='password'
            type='password'
            value={client.password}
            color="link"
            placeholder='Password'
            // onChange={(e) => setPassword(e.target.value)}
            onChange={handleTextChange}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            type='password'
            value={confirmPassword}
            color="link"
            placeholder='Confirm password'
            onChange={() => null}
          />
        </Form.Field>
        <Form.Field>
          <Button className='is-link'>Sign Up</Button>
        </Form.Field>
      </Form.Control>
    </form>
  )
}
