import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
    if (user) {
        
    } else {
      
    }
  });

export const AuthContext = ({ children }) =>{
    const [currentUser, setCurrentUser] = useState(null);


    return(
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}