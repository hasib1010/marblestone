import React, { createContext } from 'react';
import auth from '../Services/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';


export const AuthContext = createContext()

function AuthProvider({ children }) {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        createUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;