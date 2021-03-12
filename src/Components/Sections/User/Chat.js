import React, { useEffect } from 'react';

import { appendScript } from '../../../Assets/utils/appendScript';

import avatar1 from '../../../Assets/images/avatar/1.jpg';
import avatarbg from '../../../Assets/images/avatar/avatar-bg.png';

const Chat = () => {

    useEffect(() => {
        const appendScripts = () => {

            appendScript("/js/jquery.min.js", false);
            appendScript("/js/plugins.js", false);
            appendScript("/js/scripts.js", false);

        }
        appendScripts();
    }, []);

    return (
        <div className="col-md-9">
            {/* dashboard-list-box*/}         
            <div className="dashboard-list-box fl-wrap">
                <div className="dashboard-header color-bg fl-wrap">
                    <h3>Indox</h3>
                </div>
                <div className="chat-wrapper fl-wrap">
                    <div className="row">
                        {/* chat-box*/} 
                        <div className="col-sm-8">
                            <div className="chat-box fl-wrap">
                                {/* message*/} 
                                <div className="chat-message chat-message_guest fl-wrap">
                                    <div className="dashboard-message-avatar">
                                        <img src={avatar1} alt="" />
                                        <span className="chat-message-user-name cmun_sm">Andy</span>
                                    </div>
                                    <span className="massage-date">25 may 2018  <span>7.51 PM</span></span>
                                    <p>Vivamus lobortis vel nibh nec maximus. Donec dolor erat, rutrum ut feugiat sed, ornare vitae nunc. Donec massa nisl, bibendum id ultrices sed, accumsan sed dolor.</p>
                                </div>
                                {/* message end*/}
                                {/* message*/} 
                                <div className="chat-message chat-message_user fl-wrap">
                                    <div className="dashboard-message-avatar">
                                        <img src={avatar1} alt="" />
                                        <span className="chat-message-user-name cmun_sm">Jessie</span>
                                    </div>
                                    <span className="massage-date">25 may 2018  <span>7.51 PM</span></span>
                                    <p>Nulla eget erat consequat quam feugiat dapibus eget sed mauris.</p>
                                </div>
                                {/* message end*/}                                             
                                {/* message*/} 
                                <div className="chat-message chat-message_guest fl-wrap">
                                    <div className="dashboard-message-avatar">
                                        <img src={avatar1} alt="" />
                                        <span className="chat-message-user-name cmun_sm">Andy</span>
                                    </div>
                                    <span className="massage-date">25 may 2018  <span>7.51 PM</span></span>
                                    <p>Sed non neque faucibus, condimentum lectus at, accumsan enim. Fusce pretium egestas cursus..</p>
                                </div>
                                {/* message end*/} 
                                {/* message*/} 
                                <div className="chat-message chat-message_user fl-wrap">
                                    <div className="dashboard-message-avatar">
                                        <img src={avatar1} alt="" />
                                        <span className="chat-message-user-name cmun_sm">Jessie</span>
                                    </div>
                                    <span className="massage-date">25 may 2018  <span>7.51 PM</span></span>
                                    <p>Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat .</p>
                                </div>
                                {/* message end*/}                                           
                            </div>
                            <div className="chat-widget_input fl-wrap">
                                <textarea placeholder="Type Message"></textarea>                                                 
                                <button type="submit"><i className="fal fa-paper-plane"></i></button>
                            </div>
                        </div>
                        {/* chat-box end*/} 
                        {/* chat-contacts*/} 
                        <div className="col-sm-4">
                            <div className="chat-contacts fl-wrap">
                                {/* chat-contacts-item*/}
                                <a className="chat-contacts-item" href="#">
                                    <div className="dashboard-message-avatar">
                                        <img src={avatar1} alt="" />
                                        <div className="message-counter">2</div>
                                    </div>
                                    <div className="chat-contacts-item-text">
                                        <h4>Mark Rose</h4>
                                        <span>27 Dec 2018 </span>
                                        <p>Vivamus lobortis vel nibh nec maximus. Donec dolor erat, rutrum ut feugiat sed, ornare vitae nunc. Donec massa nisl, bibendum id ultrices sed, accumsan sed dolor.</p>
                                    </div>
                                </a>
                                {/* chat-contacts-item */}
                                {/* chat-contacts-item*/}
                                <a className="chat-contacts-item" href="#">
                                    <div className="dashboard-message-avatar">
                                        <img src={avatarbg} alt="" />
                                        <div className="message-counter">1</div>
                                    </div>
                                    <div className="chat-contacts-item-text">
                                        <h4>Adam Koncy</h4>
                                        <span>27 Dec 2018 </span>
                                        <p>Vivamus lobortis vel nibh nec maximus. Donec dolor erat, rutrum ut feugiat sed, ornare vitae nunc. Donec massa nisl, bibendum id ultrices sed, accumsan sed dolor.</p>
                                    </div>
                                </a>
                                {/* chat-contacts-item */}
                                {/* chat-contacts-item*/}
                                <a className="chat-contacts-item chat-contacts-item_active" href="#">
                                    <div className="dashboard-message-avatar">
                                        <img src={avatar1} alt="" />
                                        <div className="message-counter">3</div>
                                    </div>
                                    <div className="chat-contacts-item-text">
                                        <h4>Andy Smith</h4>
                                        <span>27 Dec 2018 </span>
                                        <p>Vivamus lobortis vel nibh nec maximus. Donec dolor erat, rutrum ut feugiat sed, ornare vitae nunc. Donec massa nisl, bibendum id ultrices sed, accumsan sed dolor.</p>
                                    </div>
                                </a>
                                {/* chat-contacts-item */} 
                                {/* chat-contacts-item*/}
                                <a className="chat-contacts-item" href="#">
                                    <div className="dashboard-message-avatar">
                                        <img src={avatar1} alt="" />
                                        <div className="message-counter">4</div>
                                    </div>
                                    <div className="chat-contacts-item-text">
                                        <h4>Joe Frick</h4>
                                        <span>27 Dec 2018 </span>
                                        <p>Vivamus lobortis vel nibh nec maximus. Donec dolor erat, rutrum ut feugiat sed, ornare vitae nunc. Donec massa nisl, bibendum id ultrices sed, accumsan sed dolor.</p>
                                    </div>
                                </a>
                                {/* chat-contacts-item */}
                                {/* chat-contacts-item*/}
                                <a className="chat-contacts-item" href="#">
                                    <div className="dashboard-message-avatar">
                                        <img src={avatar1} alt="" />
                                    </div>
                                    <div className="chat-contacts-item-text">
                                        <h4>Alise Goovy</h4>
                                        <span>27 Dec 2018 </span>
                                        <p>Vivamus lobortis vel nibh nec maximus. Donec dolor erat, rutrum ut feugiat sed, ornare vitae nunc. Donec massa nisl, bibendum id ultrices sed, accumsan sed dolor.</p>
                                    </div>
                                </a>
                                {/* chat-contacts-item */}
                                {/* chat-contacts-item*/}
                                <a className="chat-contacts-item" href="#">
                                    <div className="dashboard-message-avatar">
                                        <img src={avatar1} alt="" />
                                    </div>
                                    <div className="chat-contacts-item-text">
                                        <h4>Freddy Kovalsky</h4>
                                        <span>27 Dec 2018 </span>
                                        <p>Vivamus lobortis vel nibh nec maximus. Donec dolor erat, rutrum ut feugiat sed, ornare vitae nunc. Donec massa nisl, bibendum id ultrices sed, accumsan sed dolor.</p>
                                    </div>
                                </a>
                                {/* chat-contacts-item */}                                                
                                {/* chat-contacts-item*/}
                                <a className="chat-contacts-item" href="#">
                                    <div className="dashboard-message-avatar">
                                        <img src={avatar1} alt="" />
                                    </div>
                                    <div className="chat-contacts-item-text">
                                        <h4>Cristiano Olando</h4>
                                        <span>27 Dec 2018 </span>
                                        <p>Vivamus lobortis vel nibh nec maximus. Donec dolor erat, rutrum ut feugiat sed, ornare vitae nunc. Donec massa nisl, bibendum id ultrices sed, accumsan sed dolor.</p>
                                    </div>
                                </a>
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