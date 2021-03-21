import React, { useEffect, useState, useRef } from 'react';

import app from '../../../firebase';

import { useAuth } from "../../../Contexts/AuthContext";

import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';

import { appendScript } from '../../../Assets/utils/appendScript';
import $ from 'jquery';

import all1 from '../../../Assets/images/all/1.jpg';
import tchat_container from '../../../Assets/images/messages/tchat_container.png';
import avatarbg from '../../../Assets/images/avatar/avatar-bg.png';

const Cwo = (props) => {

    const { currentUser } = useAuth();
    const [messages, setMessages] = useState({});
    const [overview, setOverview] = useState([]);
    const [empty, setEmpty] = useState(false);
    const [current_contact, setCurrent_contact] = useState(props.owner);
    const [unread, setunread] = useState(0);
    const [position, setposition] = useState(0);

    async function getContact(id) {
        const db = app.firestore();

        const contactRef = db.collection('Users').doc(id);
        const doc = await contactRef.get();
        if (!doc.exists) {
            NotificationManager.info('Some error occured please refresh page');
        } else {
            return doc.data();
        }
    }

    useEffect(() => {
        const fetchChat = () => {
            const db = app.firestore();

            let tempMessages = new Object();
            let tempOverview = [];

            const observer = db.collection('Chats').where('Users', 'array-contains-any', [props.state.user.uid])
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            let id = "";
                            const Messages = change.doc.data().Messages;
                            const Last_Date = Messages[Messages.length - 1].Date.toDate().toISOString().substring(0, Messages[Messages.length - 1].Date.toDate().toISOString().length - 8);
                            let position = 0;
                            if (change.doc.data().Users[0] == props.state.user.uid) { id = change.doc.data().Users[1]; position = 1; } else { id = change.doc.data().Users[0]; }
                            if (id == props.owner) {
                                if (!tempMessages[id]) {
                                    tempMessages[id] = [];
                                }
                                const promises = [];
                                promises.push(getContact(id));
                                Promise.all(promises).then((result) => {

                                    for (let i = 0; i < Messages.length; i++) {

                                        let Type = '';
                                        if (Messages[i].Owner == props.state.user.uid) { Type = 'Send'; } else { Type = 'Receive'; }

                                        tempMessages[id].push({ id: i, Type: Type, Date: Messages[i].Date.toDate().toISOString().substring(0, Messages[i].Date.toDate().toISOString().length - 8), Message: Messages[i].Content, Name: result[0].displayName, photoUrl: result[0].photoUrl });

                                    }
                                    let unread = 0;
                                    if (change.doc.data().Unreads[0].Id == props.state.user.uid) { unread = change.doc.data().Unreads[0].Value; } else { unread = change.doc.data().Unreads[1].Value; }
                                    let active = false;
                                    if (overview.length != 0) { overview.forEach(over => { if (over.id == id) { if (over.active == true) { active = true; } } }); }
                                    tempOverview.push({ id: id, unread: unread, last_message: Messages[Messages.length - 1].Content, Name: result[0].displayName, Date: Last_Date, photoUrl: result[0].photoUrl, active: active, position: position });

                                }).catch((error) => {
                                    console.log(error)
                                    NotificationManager.info('Some error occured please refresh page');
                                }).finally(() => {

                                });
                            //console.log('New message: ', change.doc.data().Messages);
                            }
                        }
                        if (change.type === 'modified') {
                            let id = "";
                            if (change.doc.data().Users[0] == props.state.user.uid) { id = change.doc.data().Users[1]; } else { id = change.doc.data().Users[0]; }
                            if (id == props.owner) {
                                if (tempMessages[id]) {
                                    // New message
                                    if (tempMessages[id].length < change.doc.data().Messages.length) {
                                        const Messages = change.doc.data().Messages;
                                        const promises = [];
                                        promises.push(getContact(id));
                                        Promise.all(promises).then((result) => {
                                            const last = Messages.length - 1;
                                            let Type = '';
                                            if (Messages[last].Owner == props.state.user.uid) { Type = 'Send'; } else { Type = 'Receive'; }
                                            tempMessages[id].push({ id: last, Type: Type, Date: Messages[last].Date.toDate().toISOString().substring(0, Messages[last].Date.toDate().toISOString().length - 8), Message: Messages[last].Content, Name: result[0].displayName, photoUrl: result[0].photoUrl });

                                            let unread = 0;
                                            if (change.doc.data().Unreads[0].Id == props.state.user.uid) { unread = change.doc.data().Unreads[0].Value; } else { unread = change.doc.data().Unreads[1].Value; }
                                            for (let i = 0; i < tempOverview.length; i++) {
                                                if (tempOverview[i].id == id) {
                                                    tempOverview[i].last_message = Messages[last].Content;
                                                    tempOverview[i].Date = Messages[last].Date.toDate().toISOString().substring(0, Messages[last].Date.toDate().toISOString().length - 8);
                                                    tempOverview[i].unread = unread;
                                                    break;
                                                }
                                            }

                                        }).catch((error) => {
                                            console.log(error)
                                            NotificationManager.info('Some error occured please refresh page');
                                        }).finally(() => {

                                        });
                                    }
                                    // update read
                                    else if (tempMessages[id].length == change.doc.data().Messages.length) {
                                        let unread = 0;
                                        if (change.doc.data().Unreads.length == 2) {
                                            if (change.doc.data().Unreads[0].Id == props.state.user.uid) { unread = change.doc.data().Unreads[0].Value; } else { unread = change.doc.data().Unreads[1].Value; }
                                            for (let i = 0; i < tempOverview.length; i++) {
                                                if (tempOverview[i].id == id) {
                                                    tempOverview[i].unread = unread;
                                                    break;
                                                }
                                            }
                                        }

                                    }
                                    // message remove
                                    else if (tempMessages[id].length > change.doc.data().Messages.length) {

                                    }

                                } else {
                                    console.log('not exist');
                                    //tempMessages[id] = [];
                                }

                            //console.log('Modified message: ', change.doc.data());    
                            }                        
                        }
                        if (change.type === 'removed') {
                            console.log('Removed message: ', change.doc.data());
                        }
                    });
                    // ...
                    setMessages(tempMessages)
                    //console.log(tempMessages)
                    setOverview(tempOverview)
                    //console.log(tempOverview)

                }, err => {
                    console.log(`Encountered error: ${err}`);
                });

        }
        fetchChat();
    });

    useEffect(() => {
        if (overview.length == 0) {
            setTimeout(function () { setEmpty(true); }, 5000);
        }
        else {
            setTimeout(function () { setEmpty(false); }, 5000);
        }

    }, [overview]);

    function setActive(contact) {

        overview.forEach(change => {
            if (change.id == contact) {
                change.active = true;
            }
            else {
                change.active = false;
            }

        });

    }

    if (overview.length == 0) {
        return (
            <>
                {/*chat-widget */}
                <div class="chat-widget_wrap not-vis-chat">
                    <div className="chat-widget_header">
                        <h3>Chat with  <a href="author-single.html"> {props.ownerName}</a></h3>
                        <div className="status st_online"><span></span>Online</div>
                    </div>
                    <div class="chat-body">
                        <img src={tchat_container} style={{ width: '80%' }} alt="" />
                        <h3 style={{ color: '#2F3F6E' }} >Welcome to our chat app <br /> Here you can send messages to owner of this listings and chat with him. </h3>
                    </div>
                    <div className="chat-widget_input fl-wrap">
                        <textarea placeholder="Type Message"></textarea>
                        <button type="submit"><i className="fal fa-paper-plane"></i></button>
                    </div>
                </div>
                {/*chat-widget end */}
            </>
        );
    }

    return (
        <>
            {/*chat-widget */}
            <div class="chat-widget_wrap not-vis-chat">
                <div className="chat-widget_header">
                    <h3>Chat with  <a href="author-single.html"> {props.ownerName}</a></h3>
                    <div className="status st_online"><span></span>Online</div>
                </div>
                <div className="chat-body" data-simplebar >
                    <img src={tchat_container} style={{ width: '80%' }} alt="" />
                    <h3 style={{ color: '#2F3F6E' }} >Welcome to our chat app <br /> Here you can send messages to owner of this listings and chat with him. </h3>
                    <br />
                    <div class="arrow bounce" onClick={() => { $(".chat-body").animate({ scrollTop: $('.chat-body').get(0).scrollHeight }, 2000); }} >
                        <a style={{ color: '#566985' }} class="fa fa-arrow-down fa-2x" href="#"></a>
                    </div>
                    <br />
                    <br />
                    {messages[props.owner].sort(compareValues('Date')).map((item, index) =>
                        (
                        <div key={item.id} className={item.Type == 'Send' ? 'chat-message chat-message_user fl-wrap' : 'chat-message chat-message_guest fl-wrap'}>
                            <div className="dashboard-message-avatar">
                                 <img src={item.Type == 'Send' ? props.user.photoUrl ? props.user.photoUrl : avatarbg : item.photoUrl ? item.photoUrl : avatarbg} alt="" />
                            </div>
                            <span className="chat-message-user-name">{item.Type == 'Send' ? 'Me' : item.Name}</span>
                            <span className="massage-date">{item.Date.replace(/\T/g, ' ')}</span>
                            <p style={{ marginBottom: '5px', wordBreak: 'break-all', wordWrap: 'break-word' }} >{item.Message}</p>
                        </div>
                        ))} 
                </div>
                <div className="chat-widget_input fl-wrap">
                    <textarea placeholder="Type Message"></textarea>
                    <button type="submit"><i className="fal fa-paper-plane"></i></button>
                </div>
            </div>
            {/*chat-widget end */}
        </>
    );
}

export default Cwo;

function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
        }

        const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order === 'desc') ? (comparison * -1) : comparison
        );
    };
}