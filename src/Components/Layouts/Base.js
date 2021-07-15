
import React, { Fragment, useEffect, useContext, useState } from 'react'
import NotificationContainer from 'react-notifications/lib/NotificationContainer';
import { UserContext } from "../../Contexts/User/userContext";

import app from '../../firebase';
import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { appendScript } from "../../Assets/utils/appendScript";

import { getUserByEmail } from '../../Contexts/User/services';

const Base = (props) => {
    const [state, dispatch] = useContext(UserContext);
    const [user, setUser] = useState({});

    const [error, setError] = useState();
    const [infos, setInfos] = useState();

    useEffect(() => {
        if (error) {
            NotificationManager.error(error.message, error.title);
        }
    }, [error, setError]);

    useEffect(() => {
        if (infos) {
            NotificationManager.infos(infos.message, infos.title);
        }
    }, [infos, setInfos]);

    useEffect(() => {
        const appendScripts = () => {
            appendScript("/js/scripts.js", false);
            const url = window.location.href;
            let current = (new URL(url));
            const pathname = current.pathname;
            if(pathname !== '/user')
                appendScript("/js/niceSelect.js", false);
        };
        appendScripts();
    },[]);

    useEffect(() => {
        const fetchUser = () => {
        if (state.user.email) {
            getUserByEmail(state.user.email).then(
                function (user) {
                    if (user.empty) {
                        fetchUser();
                    }

                    user.forEach(doc => {
                        setUser(doc.data());
                    });
                },
                function (error) { setError({ error: true, message: 'please refresh page', title: 'no user error' }) }
            );
            }
        };
        fetchUser();
    }, [state]);

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