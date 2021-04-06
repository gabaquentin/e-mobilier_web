import React from 'react';

const Author_Contact = () => {

    return (

        <div className="box-widget-item fl-wrap block_box">
            <div className="box-widget-item-header">
                <h3>User Contacts </h3>
            </div>
            <div className="box-widget">
                <div className="box-widget-content bwc-nopad">
                    <div className="list-author-widget-contacts list-item-widget-contacts bwc-padside">
                        <ul className="no-list-style">
                            <li><span><i className="fal fa-map-marker"/> Adress :</span> <a href="#">USA 27TH
                                Brooklyn NY</a></li>
                            <li><span><i className="fal fa-phone"/> Phone :</span> <a href="#">+7(123)987654</a></li>
                            <li><span><i className="fal fa-envelope"/> Mail :</span> <a
                                href="#">AlisaNoory@domain.com</a></li>
                            <li><span><i className="fal fa-browser"/> Website :</span> <a
                                href="#">themeforest.net</a></li>
                        </ul>
                    </div>
                    <div className="list-widget-social bottom-bcw-box  fl-wrap">
                        <ul className="no-list-style">
                            <li><a href="#" target="_blank"><i className="fab fa-facebook-f"/></a></li>
                            <li><a href="#" target="_blank"><i className="fab fa-twitter"/></a></li>
                            <li><a href="#" target="_blank"><i className="fab fa-vk"/></a></li>
                            <li><a href="#" target="_blank"><i className="fab fa-instagram"/></a></li>
                        </ul>
                        <div className="bottom-bcw-box_link"><a href="#" className="show-single-contactform tolt" data-microtip-position="top" data-tooltip="Write Message"><i className="fal fa-envelope"/></a></div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Author_Contact;