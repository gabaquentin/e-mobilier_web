import React from 'react';

import team1 from '../../../../Assets/images/team/1.jpg';

const Trainer = () => {

    return (

        <div className="list-single-main-item fl-wrap block_box" id="trainers">
            <div className="list-single-main-item-title">
                <h3>Our Trainers</h3>
            </div>
            <div className="list-single-main-item_content fl-wrap">
                <div className="team-holder fl-wrap">
                    {/* team-item */}
                    <div className="team-box">
                        <div className="team-photo">
                            <img src={team1} alt="" className="respimg" />
                        </div>
                        <div className="team-info fl-wrap">
                            <h3><a href="#">Alisa Gray</a></h3>
                            <h4>Crossfit / Fitness</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. </p>
                            <div className="team-social">
                                <ul className="no-list-style">
                                    <li><a href="#" target="_blank"><i className="fab fa-facebook-f"/></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-twitter"/></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-instagram"/></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-vk"/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* team-item  end*/}
                    {/* team-item */}
                    <div className="team-box">
                        <div className="team-photo">
                            <img src={team1} alt="" className="respimg" />
                        </div>
                        <div className="team-info fl-wrap">
                            <h3><a href="#">Martin Gably</a></h3>
                            <h4>Weight room / Fitness </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. </p>
                            <div className="team-social">
                                <ul className="no-list-style">
                                    <li><a href="#" target="_blank"><i className="fab fa-facebook-f"/></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-twitter"/></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-instagram"/></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-vk"/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* team-item end  */}
                    {/* team-item */}
                    <div className="team-box">
                        <div className="team-photo">
                            <img src={team1} alt="" className="respimg" />
                        </div>
                        <div className="team-info fl-wrap">
                            <h3><a href="#">Taylor Roberts</a></h3>
                            <h4>TRX / Crossfit </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. </p>
                            <div className="team-social">
                                <ul className="no-list-style">
                                    <li><a href="#" target="_blank"><i className="fab fa-facebook-f"/></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-twitter"/></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-instagram"/></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-vk"/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* team-item end  */}
                </div>
            </div>
        </div>

    );
};

export default Trainer;