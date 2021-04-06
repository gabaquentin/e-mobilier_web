import React from 'react';

import avatar1 from '../../../../Assets/images/avatar/1.jpg';

const About_Author = () => {

    return (

        <div className="box-widget-item fl-wrap block_box">
            <div className="box-widget-item-header">
                <h3>About Athor </h3>
            </div>
            <div className="box-widget">
                <div className="box-widget-author fl-wrap">
                    <div className="box-widget-author-title">
                        <div className="box-widget-author-title-img">
                            <img src={avatar1} alt="" />
                        </div>
                        <div className="box-widget-author-title_content">
                            <a href="user-single.html">Alisa Noory</a>
                            <span>4 Places Hosted</span>
                        </div>
                        <div className="box-widget-author-title_opt">
                            <a href="#" className="tolt color-bg cwb" data-microtip-position="top"
                               data-tooltip="Chat With Owner"><i className="fas fa-comments-alt"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About_Author;