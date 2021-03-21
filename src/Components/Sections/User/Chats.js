import React, { useEffect, useState, useRef } from 'react';

import app from '../../../firebase';

import { useAuth } from "../../../Contexts/AuthContext";

import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import $ from 'jquery';

import { appendScript } from '../../../Assets/utils/appendScript';

import avatar1 from '../../../Assets/images/avatar/1.jpg';
import avatarbg from '../../../Assets/images/avatar/avatar-bg.png';
import tchat_container from '../../../Assets/images/messages/tchat_container.png';

const Chat = (props) => {

    const { currentUser } = useAuth();
    const [messages, setMessages] = useState({});
    const [overview, setOverview] = useState([]);
    const [empty, setEmpty] = useState(false);
    const [current_contact, setCurrent_contact] = useState('');
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

            const observer = db.collection('Chats').where('Users','array-contains-any',[props.state.user.uid])
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            let id = "";
                            const Messages = change.doc.data().Messages;
                            const Last_Date = Messages[Messages.length - 1].Date.toDate().toISOString().substring(0, Messages[Messages.length - 1].Date.toDate().toISOString().length - 8);
                            let position = 0;
                            if (change.doc.data().Users[0] == props.state.user.uid) { id = change.doc.data().Users[1]; position = 1; } else { id = change.doc.data().Users[0]; }
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
                        if (change.type === 'modified') {
                            let id = "";
                            if (change.doc.data().Users[0] == props.state.user.uid) { id = change.doc.data().Users[1]; } else { id = change.doc.data().Users[0]; }
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
            <div className="col-md-9">
                {/* dashboard-list-box*/}
                <div className="dashboard-list-box fl-wrap">
                    <div className="dashboard-header fl-wrap" style={{ backgroundColor: '#4CB7FE' }}>
                        <h3 style={{ marginLeft: '2%' }}>Indox </h3>
                    </div>
                    <div className="chat-wrapper fl-wrap">
                        <div className="row">
                            {/* chat-box*/}
                            <div className="col-sm-8" >
                                <Chat_Box unread={unread} position={position} state={props.state} user={props.user} messages={messages} current_contact={current_contact} />
                            </div>
                            {/* chat-box end*/}
                            {/* chat-contacts*/}
                            {empty ? (
                                <div className="col-sm-4">
                                    <div className="chat-contacts fl-wrap">
                                        {/* chat-contacts-loading*/}
                                        <div className="chat-contacts-item">
                                            <div className="dashboard-message-avatar">
                                                <Skeleton variant="circle" width={50} height={50} style={{ borderRadius: '50%' }} />
                                            </div>
                                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                                <h3 style={{ marginTop: '5%', color: '#2F3F6E' }}>No Message yet</h3>
                                            </div>
                                        </div>
                                        {/* chat-contacts-loading */}
                                    </div>
                                </div>
                            ) : (
                                    <div className="col-sm-4">
                                        <div className="chat-contacts fl-wrap">
                                            {/* chat-contacts-loading*/}
                                            <div className="chat-contacts-item">
                                                <div className="dashboard-message-avatar">
                                                    <Skeleton variant="circle" width={50} height={50} style={{ borderRadius: '50%' }} />
                                                </div>
                                                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                                    <h4 style={{ paddingRight: '17%' }}><Skeleton variant="text" width={100} /></h4>
                                                    <span><Skeleton variant="text" width={50} /></span>
                                                    <p style={{ paddingTop: '5%' }} ><Skeleton variant="text" width={182} /></p>
                                                </div>
                                            </div>
                                            {/* chat-contacts-loading */}
                                            {/* chat-contacts-loading*/}
                                            <div className="chat-contacts-item">
                                                <div className="dashboard-message-avatar">
                                                    <Skeleton variant="circle" width={50} height={50} style={{ borderRadius: '50%' }} />
                                                </div>
                                                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                                    <h4 style={{ paddingRight: '17%' }}><Skeleton variant="text" width={100} /></h4>
                                                    <span><Skeleton variant="text" width={50} /></span>
                                                    <p style={{ paddingTop: '5%' }} ><Skeleton variant="text" width={182} /></p>
                                                </div>
                                            </div>
                                            {/* chat-contacts-loading */}
                                            {/* chat-contacts-loading*/}
                                            <div className="chat-contacts-item">
                                                <div className="dashboard-message-avatar">
                                                    <Skeleton variant="circle" width={50} height={50} style={{ borderRadius: '50%' }} />
                                                </div>
                                                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                                    <h4 style={{ paddingRight: '17%' }}><Skeleton variant="text" width={100} /></h4>
                                                    <span><Skeleton variant="text" width={50} /></span>
                                                    <p style={{ paddingTop: '5%' }} ><Skeleton variant="text" width={182} /></p>
                                                </div>
                                            </div>
                                            {/* chat-contacts-loading */}
                                        </div>
                                    </div>
                                )}
                            
                            {/* chat-contacts end*/}
                        </div>
                    </div>
                    {/* dashboard-list-box end*/}
                </div>
            </div>
            );
    }

    return (
        <div className="col-md-9">
            {/* dashboard-list-box*/}
            <div className="dashboard-list-box fl-wrap">
                <div className="dashboard-header fl-wrap" style={{ backgroundColor: '#4CB7FE' }}>
                    <h3 style={{ marginLeft: '2%' }} >Indox </h3>
                </div>
                <div className="chat-wrapper fl-wrap">
                    <div className="row">
                        {/* chat-box*/}
                        <div className="col-sm-8" >
                            <Chat_Box unread={unread} position={position} state={props.state} user={props.user} messages={messages} current_contact={current_contact} />
                        </div>
                        {/* chat-box end*/}
                        {/* chat-contacts*/}
                        <div className="col-sm-4">
                            <div className="chat-contacts fl-wrap" style={{ height: '52em', overflowY: 'scroll' }}>
                                {/* chat-contacts-item*/}
                                {overview.sort(compareValues('Date', 'desc')).map((item, index) => (
                                    <a key={item.id} className={item.active ? 'chat-contacts-item chat-contacts-item_active' : 'chat-contacts-item'} href={"#chat with " + item.Name} onClick={() => { setCurrent_contact(item.id); setposition(item.position); setunread(item.unread); setActive(item.id); $(".chat-box").animate({ scrollTop: $('.chat-box').get(0).scrollHeight + '100%' }, 100); }} >
                                        <div className="dashboard-message-avatar">
                                            <img src={item.photoUrl ? item.photoUrl : avatarbg} alt="" />
                                            <div className="message-counter">{item.unread}</div>
                                        </div>
                                        <div className="chat-contacts-item-text">
                                            <h4>{item.Name}</h4>
                                            <span>{new Date(item.Date.toString()).toISOString().substring(0, new Date(item.Date.toString()).toISOString().length - 14)} </span>
                                            <p>{item.last_message}</p>
                                        </div>
                                    </a>
                                ))}
                                {/* chat-contacts-item */}
                            </div>
                        </div>
                        {/* chat-contacts end*/}
                    </div>
                </div>
                {/* dashboard-list-box end*/}
            </div>
        </div>
    );
}

export default Chat;

const Chat_Box = (props) => {

    const [isContact, setIsContact] = useState(false);
    const [disabled, setdisabled] = useState(false);
    const messageRef = useRef();

    useEffect(() => {
        const fetchChat = () => {
            if (props.current_contact != '') {
                setIsContact(true);

            }
        }
        fetchChat();
    });

    useEffect(() => {
        if (props.current_contact != '') {
            $(".chat-box").animate({ scrollTop: $('.chat-box').get(0).scrollHeight + '100%' }, 100);
            updateRead(props);
        }

    }, [props.messages[props.current_contact]]);

    async function sendMessage(e) {
        e.preventDefault();
        if (messageRef.current.value == "") {
            NotificationManager.info('Insert text before sending');
        }
        else {
            try {
                setdisabled(true);
                const db = app.firestore()

                    const promises = [];
                promises.push(newMessage(props, messageRef));
                    Promise.all(promises).then(() => {
                        setdisabled(false);
                        $(".chat-box").animate({ scrollTop: $('.chat-box').get(0).scrollHeight + '100%' }, 100);
                        document.getElementById("message-input").value = "";
                    }).catch((error) => {
                        NotificationManager.info('Please try again some error occured');
                    }).finally(() => {

                    })



            } catch (error) {

                console.log(error)

            }
        }
    }

    if (!isContact) {
        return (
            <>
                <div className="chat-box fl-wrap" style={{ height: '45em', overflowY: 'scroll' }}>
                    <img src={tchat_container} style={{ width: '80%' }} alt="" />
                    <h3 style={{ color: '#2F3F6E' }} >Welcome to our chat app <br/> Here you can receive messages from people who want to know more about yours listings and chat with him. </h3>
                </div>
            </>
        );
    }
    return (
        <>
            <div className="chat-box fl-wrap" id="chat-box-scroll" style={{ height: '45em', overflowY: 'scroll', overflow: 'auto' }}>
                {/* messages*/}
                {props.messages[props.current_contact].sort(compareValues('Date')).map((item, index) =>
                    (
                        <div key={item.id} className={item.Type == 'Send' ? 'chat-message chat-message_user fl-wrap' : 'chat-message chat-message_guest fl-wrap'}>
                            <div className="dashboard-message-avatar">
                                <img src={item.Type == 'Send' ? props.user.photoUrl ? props.user.photoUrl : avatarbg : item.photoUrl ? item.photoUrl : avatarbg} alt="" />
                                <span className="chat-message-user-name cmun_sm">{item.Type == 'Send' ? 'Me' : item.Name}</span>
                            </div>
                            <span className="massage-date">{item.Date.replace(/\T/g, ' ')} </span>
                            <p style={{ marginBottom: '5px', wordBreak: 'break-all', wordWrap: 'break-word' }}>{item.Message}</p>
                        </div>
                    ))}
                {/* messages end*/}
            </div>
            <div className="chat-widget_input fl-wrap">
                <textarea placeholder="Type Message" ref={messageRef} id="message-input"></textarea>
                <button disabled={disabled} type="submit" onClick={sendMessage} className="fa-3x" ><i className={disabled ? 'fas fa-spinner fa-spin' : 'fal fa-paper-plane'}></i></button>
            </div>
        </>
    );
}

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

const newMessage = async (props, messageRef) => {
    try {
        const db = app.firestore();

        const chatRef = db.collection('Chats');
        const snapshot = await chatRef.where('Users', 'array-contains-any', [props.state.user.uid]).get();
        if (snapshot.empty) {
            console.log('no doc');
            return;
        }

        snapshot.forEach(doc => {
            if (props.current_contact == doc.data().Users[props.position]) {
                const arrayUnion = app.firestore().app.firebase_.firestore.FieldValue.arrayUnion;
                const arrayRemove = app.firestore().app.firebase_.firestore.FieldValue.arrayRemove;
                let unread = 0;
                let myUnread = 0;
                if (doc.data().Unreads[0].Id == props.current_contact) { unread = doc.data().Unreads[0].Value; myUnread = doc.data().Unreads[1].Value; } else { unread = doc.data().Unreads[1].Value; myUnread = doc.data().Unreads[0].Value; }
                const newUnread = unread + 1;

                if (myUnread == 0) {
                    db.collection('Chats').doc(doc.id).update({ Unreads: arrayRemove({ Id: props.current_contact, Value: unread }) });
                    db.collection('Chats').doc(doc.id).update({ Messages: arrayUnion({ Content: messageRef.current.value, Date: new Date(), Owner: props.state.user.uid }), Unreads: arrayUnion({ Id: props.current_contact, Value: newUnread }) });
                } else {
                    db.collection('Chats').doc(doc.id).update({ Unreads: arrayRemove({ Id: props.current_contact, Value: unread }) });
                    db.collection('Chats').doc(doc.id).update({ Unreads: arrayRemove({ Id: props.state.user.uid, Value: myUnread }) });
                    db.collection('Chats').doc(doc.id).update({ Messages: arrayUnion({ Content: messageRef.current.value, Date: new Date(), Owner: props.state.user.uid }), Unreads: arrayUnion({ Id: props.current_contact, Value: newUnread }, { Id: props.state.user.uid, Value: 0 }) });
                }
                
                return;
            }

        });

    } catch (error) {

        console.log(error)

    }
}

const updateRead = async (props) => {
    if (props.unread != 0) {
        try {
            const db = app.firestore();

            const chatRef = db.collection('Chats');
            const snapshot = await chatRef.where('Users', 'array-contains-any', [props.state.user.uid]).get();
            if (snapshot.empty) {
                console.log('no doc');
                return;
            }

            snapshot.forEach(doc => {
                if (props.current_contact == doc.data().Users[props.position]) {
                    const arrayRemove = app.firestore().app.firebase_.firestore.FieldValue.arrayRemove;
                    const arrayUnion = app.firestore().app.firebase_.firestore.FieldValue.arrayUnion;
                    db.collection('Chats').doc(doc.id).update({ Unreads: arrayRemove({ Id: props.state.user.uid, Value: props.unread }) });
                    db.collection('Chats').doc(doc.id).update({ Unreads: arrayUnion({ Id: props.state.user.uid, Value: 0 }) });
                    return;
                }

            });

        } catch (error) {

            console.log(error)

        }
    }
}