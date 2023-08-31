import { Button, Form } from 'react-bulma-components'
import { useState } from 'react'
import { auth } from "../../services/config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../services/config/firebase'

// import { useAuth } from '../../contexts/AuthContexts'

export default function SignUp() {

  const userCollectionRef = collection(db, "users")

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    //check if username already exists 
    // const usernameExists = await checkUsername(username);
    
    // if(usernameExists) {
    //   setErrorMessage('Username already exists. Please choose another.')
    // }

    try {
      // Treat the username as the email and create a user account in firebase Auth
      await createUserWithEmailAndPassword(auth,`${username}@domain.com`, password);
      console.log('Signup successful');
      //add the new user data to firestore db
      await addDoc(userCollectionRef, {username: username, password: password });
      //clear fields
      setUsername('');
      setPassword('')
      setConfirmPassword('')

    } catch (error) {
      console.error('Signup error', error.message);
      // Look into prompt if erro relates to username already in use
    }
  };

  // const checkUsername = async (username) => {
  //   const userRef = firestore.collection('users').doc(username);
  //   const userDoc = await userRef.get();
  //   return userDoc.exists;
  // };

  // const storeUserData = async (username) => {
  //   // You can store additional user data in Firestore or other databases
  //   // For example:
  //   await userCollectionRef.doc(username).set({
  //     username,
  //     // Other user data fields...
  //   });
  // };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <Form.Control>
        <Form.Field>
          <Form.Input
            type='text'
            value={username}
            color="link"
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            type='password'
            value={password}
            color="link"
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
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
