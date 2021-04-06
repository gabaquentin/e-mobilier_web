
import React, { Fragment, useEffect, useContext, useState } from 'react'
import NotificationContainer from 'react-notifications/lib/NotificationContainer';
import { UserContext } from "../../Contexts/User/userContext";

import app from '../../firebase';
import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import {appendScript} from "../../Assets/utils/appendScript";

const Base = (props) => {
    const [state, dispatch] = useContext(UserContext);
    const [user, setUser] = useState({});

    useEffect(() => {
        const appendScripts = () => {
            appendScript("/js/scripts.js", false);
        };
        appendScripts();
    },[]);

    useEffect(() => {
        const fetchUser = async () => {
            if (state.user.email) {
                const db = app.firestore();
                const userRef = db.collection('Users');
                const snapshot = await userRef.where('Email', '==', state.user.email).get();
                if (snapshot.empty) {
                    NotificationManager.error('Verify your connection');
                    return;
                }

                snapshot.forEach(doc => {
                    setUser(doc.data())
                });
            }

        };
        fetchUser()
    },[state]);

    return (
        <Fragment>

            <NotificationContainer />
            <div id="wrapper">
                <div className="content">
                    {React.cloneElement(props.children, { user: user, state: state, dispatch: dispatch} )}
                </div>
            </div>

        </Fragment>
    );

};

export default Base;