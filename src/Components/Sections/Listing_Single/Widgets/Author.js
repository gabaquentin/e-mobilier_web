import React from 'react';

import avatar1 from '../../../../Assets/images/avatar/1.jpg';
import {Link} from "react-router-dom";

const Author = () => {

    return (

        <div className="box-widget-item fl-wrap block_box">
            <div className="box-widget-item-header">
                <h3>Hosted by : </h3>
            </div>
            <div className="box-widget">
                <div className="box-widget-author fl-wrap">
                    <div className="box-widget-author-title">
                        <div className="box-widget-author-title-img">
                            <img src={avatar1} alt="" />
                        </div>
                        <div className="box-widget-author-title_content">
                            <Link to={"/author-single"}>Alisa Noory</Link>
                            <span>4 Places Hosted</span>
                        </div>
                        <div className="box-widget-author-title_opt">
                            <Link to={"/author-single"} className="tolt green-bg" data-microtip-position="top" data-tooltip="View Profile"><i className="fas fa-user"/></Link>
                            <a href="#" className="tolt color-bg cwb" data-microtip-position="top" data-tooltip="Chat With Owner"><i className="fas fa-comments-alt"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Author;