// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// function PrivateRoute({ component: Component, ...rest }) {
//   const { currentUser } = useAuth();

//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         return currentUser ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/signin" /> // Redirect to the sign-in page if not authenticated
//         );
//       }}
//     />
//   );
// }

export default PrivateRoute;
