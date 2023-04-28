import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firebase/Firebase.config.js';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {

   const user = {displayName: 'Shakib khan'}


    const authInfo = {
        user,
    
    }
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;