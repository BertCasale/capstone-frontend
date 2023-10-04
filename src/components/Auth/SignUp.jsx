import { Button, Form } from 'react-bulma-components'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { auth } from "../../services/config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
// import { addDoc, collection } from 'firebase/firestore'
// import { db } from '../../services/config/firebase'
import axios from 'axios'
const API = import.meta.env.VITE_REACT_APP_API_URL;

export default function SignUp() {

  
  
  // const userCollectionRef = collection(db, "users");
  const navigate = useNavigate()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
 

  const [client, setClient] = useState({
    providerid: '',
    registration_datetime: '',
    username: '',
    email: '',
    password: '',
    profile_picture: 'none',
    role: ''
  });



//POST request to the backend for creating new user account
  const newClient = async (newUserDetails) => { // Make it async
   
    try {
      await axios.post(`${API}/clients`, newUserDetails) //  Use client object directly
      .then(navigate('/dashboard'));
    } catch (error) {
      console.log(error);
      console.log(newUserDetails);
    }
  }
  // const [errorMessage, setErrorMessage] = useState('');


  //---------------------------------------
  const handleSignUp = async (e) => {
    e.preventDefault();
   
    try {
      
      //uses firebase creatUserWithEmailAndPassword builtin function
      await createUserWithEmailAndPassword(auth, client.email, client.password)
      // console.log(`Signup successful`);
      .then((userCredential) => {
        const user = userCredential.user;
        const uid = user.uid;
        const registrationDate = user.metadata.creationTime
        const dateObj = new Date(registrationDate)
        const registered = dateObj.toISOString();
        const userEmail = user.email
        //update the registration_datetime key in client object
        const recordDate = {...client, providerid: uid, registration_datetime: registered} //
        newClient(recordDate)

        console.log(`new user created with UID: ${uid} Username: ${userEmail} registed on ${registered}`);
 
        console.log(recordDate)
        
      });

      await newClient();
      //add the new user data to firestore db
      // await addDoc(userCollectionRef, { username: username, password: password });
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
//-------------------------------------------------
//used for testing


//-----------------------

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
            id='email'
            type='text'
            value={client.email}
            color="link"
            placeholder='Email'
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
          <Form.Control>
            <Form.Radio
            id="role"
            value={'Student'}
            checked={client.role === 'Student'}
            onChange={handleTextChange}
            >
              Student
            </Form.Radio>
            <Form.Radio
             id="role"
            value={"Administrator"}
            checked={client.role === 'Administrator'}
            onChange={handleTextChange}
            >
              Administrator
            </Form.Radio>
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Button className='is-link'>Sign Up</Button>
        </Form.Field>
      </Form.Control>
    </form>
  )
}