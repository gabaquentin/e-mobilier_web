import React from 'react';

import avatar1 from '../../../../Assets/images/avatar/1.jpg';
import bg1 from '../../../../Assets/images/bg/1.jpg';

const User_Profile = () => {

    return (

        <div className="user-profile-header fl-wrap">
            <div className="user-profile-header_media fl-wrap">
                <div className="bg" data-bg={bg1}/>
                <div className="user-profile-header_media_title">
                    <h3>Alisa Noory</h3>
                    <h4>Chamber Company</h4>
                </div>
                <div className="user-profile-header_stats">
                    <ul className="no-list-style">
                        <li><span>4</span>Places</li>
                        <li><span>20</span>Followers</li>
                        <li><span>4</span>Following</li>
                    </ul>
                </div>
                <div className="follow-btn color2-bg">Follow <i className="fal fa-user-plus"/></div>
            </div>
            <div className="user-profile-header_content fl-wrap">
                <div className="user-profile-header-avatar">
                    <img src={avatar1} alt="" />
                </div>
                <p>Praesent eros turpis, commodo vel justo at, pulvinar mollis eros. Mauris aliquet eu quam id ornare.
                    Morbi ac quam enim. Cras vitae nulla condimentum, semper dolor non, faucibus dolor. Vivamus
                    adipiscing eros quis orci fringilla, sed pretium lectus viverra. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec velit non odio aliquam
                    suscipit. Sed non neque faucibus, condimentum lectus at, accumsan enim. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus
                    lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et
                    pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed
                    tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.</p>
                <a href="#" className="btn  float-btn color2-bg">Visit Website<i className="fal fa-chevron-right"/></a>
            </div>
        </div>

    );
};

export default User_Profile;