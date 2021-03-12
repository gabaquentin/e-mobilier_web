import React, { useEffect } from 'react';

import { appendScript } from '../../../Assets/utils/appendScript';

import avatar1 from '../../../Assets/images/avatar/1.jpg';
import all1 from '../../../Assets/images/all/1.jpg';
import bg1 from '../../../Assets/images/bg/1.jpg';

const Feed = () => {

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
            <div className="row">
                <div className="col-md-8">
                    <div className="dashboard-title   fl-wrap">
                        <h3>Your feed</h3>
                    </div>
                    {/* dashboard-list-box*/} 
                    <div className="dashboard-list-box mar-dash-list fl-wrap">
                        {/* dashboard-list end*/}    
                        <div className="dashboard-list fl-wrap">
                            <div className="dashboard-message">
                                <span className="new-dashboard-item"><i className="fal fa-times"></i></span>
                                <div className="dashboard-message-text">
                                    <img src={all1} alt="" /> 
                                    <p><a href="#">Mark Rose</a> add new Listing Park Central. <a href="#">View Details</a>   </p>
                                </div>
                                <div className="dashboard-message-time"><i className="fal fa-calendar-week"></i> 28 may 2020</div>
                            </div>
                        </div>
                        {/* dashboard-list end*/}    
                        {/* dashboard-list end*/}    
                        <div className="dashboard-list fl-wrap">
                            <div className="dashboard-message">
                                <span className="new-dashboard-item"><i className="fal fa-times"></i></span>
                                <div className="dashboard-message-text">
                                    <i className="far fa-heart purp-bg"></i>
                                    <p><a href="#">Fider Mamby</a> bookmarked your <a href="#">Holiday Home</a> listing!</p>
                                </div>
                                <div className="dashboard-message-time"><i className="fal fa-calendar-week"></i> 28 may 2020</div>
                            </div>
                        </div>
                        {/* dashboard-list end*/}                                           
                        {/* dashboard-list end*/}    
                        <div className="dashboard-list fl-wrap">
                            <div className="dashboard-message">
                                <span className="new-dashboard-item"><i className="fal fa-times"></i></span>
                                <div className="dashboard-message-text">
                                    <i className="fal fa-comments-alt red-bg"></i>
                                    <p> <a href="#"> Mary Jones</a> left a review on <a href="#">Park Central</a> listing!</p>
                                </div>
                                <div className="dashboard-message-time"><i className="fal fa-calendar-week"></i> 28 may 2020</div>
                            </div>
                        </div>
                        {/* dashboard-list end*/}                                           
                        {/* dashboard-list end*/}    
                        <div className="dashboard-list fl-wrap">
                            <div className="dashboard-message">
                                <span className="new-dashboard-item"><i className="fal fa-times"></i></span>
                                <div className="dashboard-message-text">
                                    <i className="far fa-check green-bg"></i>
                                    <p> Your listing <a href="#">Holiday Home</a> has been approved! </p>
                                </div>
                                <div className="dashboard-message-time"><i className="fal fa-calendar-week"></i> 28 may 2020</div>
                            </div>
                        </div>
                        {/* dashboard-list end*/}    
                        {/* dashboard-list end*/}    
                        <div className="dashboard-list fl-wrap">
                            <div className="dashboard-message">
                                <span className="new-dashboard-item"><i className="fal fa-times"></i></span>
                                <div className="dashboard-message-text">
                                    <img src={all1} alt="" />
                                    <p><a href="#"> Mary Jones</a> add new Listing Park Central. <a href="#">View Details</a></p>
                                </div>
                                <div className="dashboard-message-time"><i className="fal fa-calendar-week"></i> 28 may 2020</div>
                            </div>
                        </div>
                        {/* dashboard-list end*/}  
                        {/* dashboard-list end*/}    
                        <div className="dashboard-list fl-wrap">
                            <div className="dashboard-message">
                                <span className="new-dashboard-item"><i className="fal fa-times"></i></span>
                                <div className="dashboard-message-text">
                                    <i className="fal fa-comments-alt red-bg"></i>
                                    <p> <a href="#"> Mary Jones</a> left a review on <a href="#">Park Central</a> listing!</p>
                                </div>
                                <div className="dashboard-message-time"><i className="fal fa-calendar-week"></i> 28 may 2020</div>
                            </div>
                        </div>
                        {/* dashboard-list end*/}                                       
                    </div>
                    {/* dashboard-list-box end*/} 
                    <div className="pagination">
                        <a href="#" className="prevposts-link"><i className="fas fa-caret-left"></i><span>Prev</span></a>
                        <a href="#">1</a>
                        <a href="#" className="current-page">2</a>
                        <a href="#">3</a>
                        <a href="#">...</a>
                        <a href="#">7</a>
                        <a href="#" className="nextposts-link"><span>Next</span><i className="fas fa-caret-right"></i></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className=" fl-wrap   tabs-act block_box dashboard-tabs">
                        <div className="filter-sidebar-header fl-wrap" id="filters-column">
                            <ul className="tabs-menu fl-wrap no-list-style">
                                <li className="current"><a href="#follow-you"> <i className="fal fa-rss"></i> Following <span>5</span></a></li>
                                <li><a href="#follow-me"> <i className="fal fa-users"></i>Followers <span>4</span></a></li>
                            </ul>
                        </div>
                        <div className="scrl-content filter-sidebar    fs-viscon">
                            {/*tabs */}                       
                            <div className="tabs-container fl-wrap">
                                {/*tab */}
                                <div className="tab">
                                    <div id="follow-you" className="tab-content  first-tab ">
                                        <div className="follow-user-list fl-wrap">
                                            <ul className="no-list-style">
                                                <li>
                                                    <a href="author-single.html">
                                                    <img src={avatar1} alt="" />
                                                    <span>Jessie Manrty</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="author-single.html">
                                                    <img src={avatar1} alt="" />
                                                    <span>Mark Rose</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="author-single.html">
                                                    <img src={avatar1} alt="" />
                                                    <span>Andy Moore</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="author-single.html">
                                                    <img src={avatar1} alt="" />
                                                    <span> Mary Jones</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="author-single.html">
                                                    <img src={avatar1} alt="" />
                                                    <span>Fider Mamby</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/*tab end*/}
                                {/*tab */} 
                                <div className="tab">
                                    <div id="follow-me" className="tab-content">
                                        <div className="follow-user-list fl-wrap">
                                            <ul className="no-list-style">
                                                <li>
                                                    <a href="author-single.html">
                                                    <img src={avatar1} alt="" />
                                                    <span>Jessie Hikus</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="author-single.html">
                                                    <img src={avatar1} alt="" />
                                                    <span>Alisa Noory</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="author-single.html">
                                                    <img src={avatar1} alt="" />
                                                    <span>Mark Rose</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="author-single.html">
                                                    <img src={avatar1} alt="" />
                                                    <span>Jessie Manrty</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/*tab end*/}
                            </div>
                            {/*tabs end*/}                         
                        </div>
                    </div>
                    {/*box-widget-item */}
                    <div className="box-widget-item fl-wrap" style={{ marginTop: '20px' }}>
                        <div className="banner-wdget fl-wrap">
                            <div className="overlay op4"></div>
                            <div className="bg"  data-bg={bg1}></div>
                            <div className="banner-wdget-content fl-wrap">
                                <h4>Participate in our loyalty program. Refer a friend and get a discount.</h4>
                                <a href="#" className="color-bg">Read more</a>
                            </div>
                        </div>
                    </div>
                    {/*box-widget-item end */}          
                </div>
            </div>
        </div>
    );
}

export default Feed;