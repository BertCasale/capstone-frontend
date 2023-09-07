import {auth} from '../../services/config/firebase';
import { Route, redirect, useNavigate} from 'react-router-dom';

export default function PrivateRoute({component:Component, ...rest}) {
  // look into above arguments
  const currentUser = auth.currentUser;
  // const navigate = useNavigate();

  return (
   <Route 
   //render is likely a deprecated feature, look into new implementation
   render={(props) => {
    return currentUser ? (
      <Component {...props} />
    ) : (
      redirect('/landing')
    )
   }}
   />
  )
}
