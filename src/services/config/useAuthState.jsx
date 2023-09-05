import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

// const auth = getAuth();

export default function useAuthState() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // User is authenticated
        setUser(authUser);
      } else {
        // User is not authenticated
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return user;
}
