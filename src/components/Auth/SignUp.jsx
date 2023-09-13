import { Button, Form } from 'react-bulma-components'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { auth } from "../../services/config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
// import { addDoc, collection } from 'firebase/firestore'
// import { db } from '../../services/config/firebase'
import axios from 'axios'
const API = import.meta.env.VITE_API_URL;

// import { useAuth } from '../../contexts/AuthContexts'

export default function SignUp() {
 
  // const userCollectionRef = collection(db, "users");
  const navigate = useNavigate()

  //UseState variable
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [radioSelection, setRadioSelection] = useState('student')

  const [client, setClient] = useState({
    registration_datetime: '',
    username: '',
    email: '',
    password: '',
    profile_picture: 'none',
    role: '',
  });


//POST request to the backend for creating new user account
  const newClient = async (newUserDetails) => { // Make it async
    try {
      await axios.post(`${API}/clients`, newUserDetails); // Use client object directly
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  }


  //---------------------------------------
  //handler function for signup
  const handleSignUp = async (e) => {
    e.preventDefault();
   
    try {
      // Treat the username as the email and create a user account in firebase Auth
      // await createUserWithEmailAndPassword(auth, `${username}@domain.com`, password)
      
      //uses firebase creatUserWithEmailAndPassword builtin function
      await createUserWithEmailAndPassword(auth, `${client.email}`, client.password)
      // console.log(`Signup successful`);
      
      //response data(userDetails) is used to filter for specifics like UID, Date, Email, Password
      .then((userDetails) => {
        const user = userDetails.user;
        const uid = user.uid;
        //date start - date conversion
        const registrationDate = user.metadata.creationTime
        const dateObj = new Date(registrationDate)
        const registered = dateObj.toISOString();
        //date end
        const userEmail = user.email
        //update the registration_datetime key in client object
        const recordDate = {...client, registration_datetime: registered}
        newClient(recordDate)

        console.log(`new user created with UID: ${uid} Username: ${userEmail} registed on ${registered}`);
        console.log(recordDate);
        console.log(client)   
      });

      // // await newClient(recordDate);
      // //add the new user data to firestore db
      // await addDoc(userCollectionRef, { username: username, password: password });
      // //clear fields
      // setUsername('');
      // setPassword('')
      // setConfirmPassword('')
      // //redirect user
      // navigate('/')

    } catch (error) {
      console.error('Signup error', error.message);
      // Look into prompt if error relates to username already in use
    }
  };
//-------------------------------------------------
//used for testing


//-----------------------

  const handleTextChange = async (e) => {
    await setClient({...client, [e.target.id]: e.target.value })
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
        <Form.Control>
          <Form.Radio
        
            value="Student"
            color="link"
            checked={radioSelection === "Student"}
            onChange={((e) =>{setRadioSelection(e.target.value); setClient({...client, role: "Student"});})}>
              Student
            </Form.Radio>
          <Form.Radio
          
            value="Administrator"
            color="link"
            checked={radioSelection === "Administrator"}
            onChange={((e) =>{setRadioSelection(e.target.value); setClient({...client, role: "Administrator"});})}>
              Administrator
            </Form.Radio>
       
        </Form.Control>
        <Form.Field>
          <Button className='is-link'>Sign Up</Button>
        </Form.Field>
      </Form.Control>
    </form>
  )
}
