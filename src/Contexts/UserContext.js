import React, { useState, useEffect } from 'react';
import { useAuth } from "./AuthContext";
import app from '../firebase';

export function UserStatus() {
    const { currentUser } = useAuth();

    if (currentUser) {
        return true;
    } else {
        return false;
    }

}

export async function UserCred() {
    const [userCred, setUserCred] = useState([]);
    const isConnect = UserStatus();
    const { currentUser } = useAuth();

    if (isConnect) {
        const db = app.firestore()
        const snapshot = await db.collection('Users').doc(currentUser.uid).get();
        setUserCred(snapshot.data());
    }


    return userCred;
}