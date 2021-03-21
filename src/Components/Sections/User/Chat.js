import React, { useEffect, useState, useRef } from 'react';

import app from '../../../firebase';

import { useAuth } from "../../../Contexts/AuthContext";

import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';

import $ from 'jquery';

import { appendScript } from '../../../Assets/utils/appendScript';

import avatar1 from '../../../Assets/images/avatar/1.jpg';
import avatarbg from '../../../Assets/images/avatar/avatar-bg.png';

const Chat = (props) => {

    const { currentUser } = useAuth();
    const [messages, setMessages] = useState({});
    const [overview, setOverview] = useState([]);
    const [current_contact, setCurrent_contact] = useState('');
    const [unread, setunread] = useState(0);

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

            const observer = db.collection('Chat').orderBy('Date')
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            if (change.doc.data().From == props.state.user.uid || change.doc.data().To == props.state.user.uid) {
                                //console.log('New message: ', change.doc.data());
                                let Type = '';
                                let id = '';
                                if (change.doc.data().From == props.state.user.uid) {
                                    Type = 'Send';
                                    id = change.doc.data().To;
                                } else if (change.doc.data().To == props.state.user.uid) {
                                    Type = 'Receive';
                                    id = change.doc.data().From;
                                }
                                if (!tempMessages[id]) {
                                    tempMessages[id] = [];
                                }
                                const promises = [];
                                promises.push(getContact(id));
                                const Date = change.doc.data().Date.toDate().toISOString().substring(0, change.doc.data().Date.toDate().toISOString().length - 8);
                                Promise.all(promises).then((result) => {
                                    tempMessages[id].push({ id: change.doc.id, Type: Type, Date: Date, Message: change.doc.data().Message, Name: result[0].displayName, photoUrl: result[0].photoUrl });
                                    let unread = 0;
                                    if (change.doc.data().Read == 0) {
                                        if (Type == 'Receive') {
                                            unread = 1;
                                        } 
                                    }
                                    let active = false;
                                    if (overview.length != 0) {
                                        overview.forEach(over => {
                                            if (over.id == id) {
                                                if (over.active == true) {
                                                    active = true;
                                                }
                                            }

                                        });
                                    }
                                    if (tempOverview.length == 0) {
                                        tempOverview.push({ id: id, unread: unread, last_message: change.doc.data().Message, Name: result[0].displayName, Date: Date, photoUrl: result[0].photoUrl, active: active });
                                    } else {
                                        for (let i = 0; i < tempOverview.length; i++) {
                                            if (tempOverview[i].id == id) {
                                                tempOverview[i].last_message = change.doc.data().Message;
                                                tempOverview[i].Date = Date;
                                                tempOverview[i].unread += unread;
                                                break;
                                            } else if (i == (tempOverview.length-1)) {
                                                tempOverview.push({ id: id, unread: unread, last_message: change.doc.data().Message, Name: result[0].displayName, Date: Date, photoUrl: result[0].photoUrl, active: active });
                                            }
                                        }
                                    }
                                    
                                    
                                }).catch((error) => {
                                    console.log(error)
                                    NotificationManager.info('Some error occured please refresh page');
                                }).finally(() => {

                                })
                            }
                        }
                        if (change.type === 'modified') {
                            let id = '';
                            if (change.doc.data().From == props.state.user.uid) {
                                id = change.doc.data().To;
                                tempOverview[tempOverview.findIndex((obj => obj.id == id))].unread = 0;
                            } else if (change.doc.data().To == props.state.user.uid) {
                                id = change.doc.data().From;
                                tempOverview[tempOverview.findIndex((obj => obj.id == id))].unread = 0;
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
    }, []);

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

    return (
        <div className="col-md-9">
            {/* dashboard-list-box*/}         
            <div className="dashboard-list-box fl-wrap">
                <div className="dashboard-header fl-wrap" style={{ backgroundColor: '#4CB7FE' }}>
                    <h3>Indox </h3>
                </div>
                <div className="chat-wrapper fl-wrap">
                    <div className="row">
                        {/* chat-box*/} 
                        <div className="col-sm-8" >
                            <Chat_Box unread={unread} state={props.state} user={props.user} messages={messages} current_contact={current_contact}/>
                        </div>
                        {/* chat-box end*/} 
                        {/* chat-contacts*/} 
                        <div className="col-sm-4">
                            <div className="chat-contacts fl-wrap" style={{ height: '52em', overflowY: 'scroll' }}>
                                {/* chat-contacts-item*/}
                                {overview.sort(compareValues('Date', 'desc')).map((item, index) => (
                                    <a key={item.id} className={item.active ? 'chat-contacts-item chat-contacts-item_active' : 'chat-contacts-item'} href={"#chat with " + item.Name} onClick={() => { setCurrent_contact(item.id); setunread(item.unread); setActive(item.id); $(".chat-box").animate({ scrollTop: $('.chat-box').get(0).scrollHeight + '100%' }, 2000); }} >
                                        <div className="dashboard-message-avatar">
                                            <img src={item.photoUrl ? item.photoUrl : avatarbg} alt="" />
                                            <div className="message-counter">{item.unread}</div>
                                        </div>
                                        <div className="chat-contacts-item-text">
                                            <h4>{item.Name}</h4>
                                            <span>{ new Date(item.Date.toString()).toISOString().substring(0, new Date(item.Date.toString()).toISOString().length - 14) } </span>
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
            $(".chat-box").animate({ scrollTop: $('.chat-box').get(0).scrollHeight + '100%' }, 2000);
            fetchChat(props);
        }
        
    }, [props.messages[props.current_contact]]);

    async function sendMessage(e) {
        e.preventDefault();
        if (messageRef.current.value == "") {
            return NotificationManager.info('Insert text before sending');
        }
        else {
            try {
                setdisabled(true);
                const db = app.firestore()
                db.collection('Chat').add({
                    Date: new Date(),
                    From: props.state.user.uid,
                    To: props.current_contact,
                    Message: messageRef.current.value,
                    Read: 0
                }).then(() => {
                    const promises = [];
                    promises.push(fetchChat(props));
                    Promise.all(promises).then(() => {
                        setdisabled(false);
                        $(".chat-box").animate({ scrollTop: $('.chat-box').get(0).scrollHeight + '100%' }, 2000);
                        document.getElementById("message-input").value = "";
                    }).catch((error) => {
                        NotificationManager.info('Please try again some error occured');
                    }).finally(() => {

                    })
                });
                

            } catch (error) {

                console.log(error)

            }
        }
    }
    
    if (!isContact) {
        return (
            <>
                <div className="chat-box fl-wrap" style={{ height: '45em', overflowY: 'scroll' }}>

                </div>
                <div className="chat-widget_input fl-wrap">
                    <textarea placeholder="Type Message" disabled ></textarea>
                    <button type="submit" disabled><i className="fal fa-paper-plane"></i></button>
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
                                <img src={item.Type == 'Send' ? props.user.photoUrl ? props.user.photoUrl : avatarbg : item.photoUrl ? item.photoUrl : avatarbg } alt="" />
                                <span className="chat-message-user-name cmun_sm">{item.Type == 'Send' ? 'Me' : item.Name}</span>
                        </div>
                            <span className="massage-date">{item.Date.replace(/\T/g, ' ')} </span>
                            <p style={{ marginBottom: '5px', wordBreak: 'break-all', wordWrap: 'break-word'}}>{item.Message}</p>
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

const fetchChat = async (props) => {
    try {
        const db = app.firestore();
        if (props.unread != 0) {

            const chatRef = db.collection('Chat');
            const snapshot = await chatRef.where('From', '==', props.current_contact).where('To', '==', props.state.user.uid).get();
            if (snapshot.empty) {
                return;
            }

            snapshot.forEach(doc => {
                if (doc.data().Read == 0) {
                    db.collection('Chat').doc(doc.id).update({ Read: 1 });
                }

            });
        }


    } catch (error) {

        console.log(error)

    }
}