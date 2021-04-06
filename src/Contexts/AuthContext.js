import React, { useContext, useState, useEffect } from 'react';
import app, { auth } from "../firebase"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }   

    function reauthenticate(password) {
        const credential = app.firebase_.auth.EmailAuthProvider.credential(
            currentUser.email,
            password
        );
        return currentUser.reauthenticateWithCredential(credential)
    }   

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    function deleteUser() {
        return currentUser.delete()

    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false)
        });

        return unsubscribe
    }, []);

    const value = {
        currentUser,
        login,
        reauthenticate,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        deleteUser
    };
        return (

            <AuthContext.Provider value={value}>
            {!loading && children}
            </AuthContext.Provider>
        );
}