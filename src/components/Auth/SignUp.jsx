import { Button, Form } from 'react-bulma-components'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { auth } from "../../services/config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../services/config/firebase'
import axios from 'axios'
const API = import.meta.env.VITE_API_URL;

// import { useAuth } from '../../contexts/AuthContexts'

export default function SignUp() {

  const userCollectionRef = collection(db, "users");
  const navigate = useNavigate()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [client, setClient] = useState({
    registration_date: '',
    username: '',
    email: '',
    password: '',
    profile_picture: '',
    role: ''
  });



  const newClient = () => {
    let newUser = client;
    axios
      .post(`${API}/clients`, newUser)
      .then(() => {
        navigate('/dashboard');
      })
      .catch((error) => console.log(error))
  }
  // const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    newClient();

    try {
      // Treat the username as the email and create a user account in firebase Auth
      // await createUserWithEmailAndPassword(auth, `${username}@domain.com`, password)
      await createUserWithEmailAndPassword(auth, `${client.username}@domain.com`, client.password)
      // console.log(`Signup successful`);
      .then((userCredential) => {
        const user = userCredential.user;
        const uid = user.uid;
        const registrationDate = user.metadata.creationTime
        const userEmail = user.email

        console.log(`new user created with UID: ${uid} Username: ${userEmail} registed on ${registrationDate}`);
        // console.log(user.email);
        // console.log(registrationDate);
        // console.log(userCredential);
      })
      //add the new user data to firestore db
      await addDoc(userCollectionRef, { username: username, password: password });
      //clear fields
      setUsername('');
      setPassword('')
      setConfirmPassword('')
      //redirect user
      navigate('/')

    } catch (error) {
      console.error('Signup error', error.message);
      // Look into prompt if error relates to username already in use
    }
  };

  const handleTextChange = (e) => {
    setClient({...client, [e.target.id]: e.target.value })
  }

  return (
    <form className='form' onSubmit={handleSignUp}>
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
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Button className='is-link'>Sign Up</Button>
        </Form.Field>
      </Form.Control>
    </form>
  )
}
