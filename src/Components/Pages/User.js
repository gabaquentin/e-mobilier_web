import React, { useEffect, Fragment, useContext, useState } from 'react';
import { UserContext } from "../../Contexts/User/userContext";
import app from '../../firebase';

import Content from '../Sections/User/Content';
import 'react-notifications/lib/notifications.css';
import Base from '../Layouts/Base';

const User = () => {
    const [unreadMessages, setUnreadMessages] = useState('');
    const [state, dispatch] = useContext(UserContext);

    useEffect(() => {
        const fetchChat = async () => {
            if (state.user.uid) {
                const db = app.firestore()
                const chatsRef = db.collection('Chats');
                const snapshot = await chatsRef.where('Users', 'array-contains-any', [state.user.uid]).get();
                if (snapshot.empty) {
                    setUnreadMessages(0);
                    return;
                }
                let tempUnread = 0;
                snapshot.forEach(doc => {
                    let position = 0;

                    if (doc.data().Unreads[0].Id == state.user.uid) {
                        position = 0;
                    }
                    else {
                        position = 1;
                    }

                    if (doc.data().Unreads[position].Value != 0) {
                        tempUnread += doc.data().Unreads[position].Value;
                    }
                });
                setUnreadMessages(tempUnread);
            }
        }
        fetchChat();
    }, [])

    return (
        <Base>
            <Content unreadMessages={unreadMessages} />
        </Base>
    );
}

export default User;