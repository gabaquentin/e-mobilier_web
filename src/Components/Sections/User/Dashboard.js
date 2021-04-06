import React, {useEffect} from 'react';
import {appendScript} from "../../../Assets/utils/appendScript";

const Dashboard = () => {

    useEffect(() => {
        const appendScripts = () => {
            appendScript("/js/charts.js", false);
            appendScript("/js/dashboard.js", false);
        };
        appendScripts();
    },[]);

    return (
        <div className="col-md-9">
            <div className="dashboard-title fl-wrap">
                <h3>Your Statistics</h3>
            </div>
            {/* list-single-facts */}
            <div className="list-single-facts fl-wrap">
                <div className="row">
                    <div className="col-md-4">
                        {/* inline-facts */}
                        <div className="inline-facts-wrap gradient-bg ">
                            <div className="inline-facts">
                                <i className="fal fa-chart-bar"/>
                                <div className="milestone-counter">
                                    <div className="stats animaper">
                                        <div className="num" data-content="0" data-num="1054">0</div>
                                    </div>
                                </div>
                                <h6>Listing Views</h6>
                            </div>
                            <div className="stat-wave">
                                <svg viewBox="0 0 100 25">
                                    <path fill="#fff" d="M0 30 V12 Q30 17 55 2 T100 11 V30z" />
                                </svg>
                            </div>
                        </div>
                        {/* inline-facts end */}
                    </div>
                    <div className="col-md-4">
                        {/* inline-facts  */}
                        <div className="inline-facts-wrap gradient-bg ">
                            <div className="inline-facts">
                                <i className="fal fa-comments-alt"/>
                                <div className="milestone-counter">
                                    <div className="stats animaper">
                                        <div className="num" data-content="0" data-num="2557">0</div>
                                    </div>
                                </div>
                                <h6>Total Reviews</h6>
                            </div>
                            <div className="stat-wave">
                                <svg viewBox="0 0 100 25">
                                    <path fill="#fff" d="M0 30 V12 Q30 17 55 12 T100 11 V30z" />
                                </svg>
                            </div>
                        </div>
                        {/* inline-facts end */}
                    </div>
                    <div className="col-md-4">
                        {/* inline-facts  */}
                        <div className="inline-facts-wrap gradient-bg ">
                            <div className="inline-facts">
                                <i className="fal fa-envelope-open-dollar"/>
                                <div className="milestone-counter">
                                    <div className="stats animaper">
                                        <div className="num" data-content="0" data-num="125">0</div>
                                    </div>
                                </div>
                                <h6>Bookings </h6>
                            </div>
                            <div className="stat-wave">
                                <svg viewBox="0 0 100 25">
                                    <path fill="#fff" d="M0 30 V12 Q30 12 55 5 T100 11 V30z" />
                                </svg>
                            </div>
                        </div>
                        {/* inline-facts end */}
                    </div>
                </div>
            </div>
            {/* list-single-facts end */}
            <div className="list-single-main-item fl-wrap block_box">
                {/* chart-wra*/}
                <div className="chart-wrap   fl-wrap">
                    <div className="chart-header fl-wrap">
                        <div className="listsearch-input-item">
                            <select data-placeholder="Week" className="chosen-select no-search-select" >
                                <option>Week</option>
                                <option>Month</option>
                                <option>Year</option>
                            </select>
                        </div>
                        <div id="myChartLegend"/>
                    </div>
                    <canvas id="canvas-chart"/>
                </div>
                {/*chart-wrap end*/}
            </div>
            <div className="dashboard-title dt-inbox fl-wrap">
                <h3>Recent Activities</h3>
            </div>
            {/* dashboard-list-box*/}
            <div className="dashboard-list-box  fl-wrap">
                {/* dashboard-list end*/}
                <div className="dashboard-list fl-wrap">
                    <div className="dashboard-message">
                        <span className="new-dashboard-item"><i className="fal fa-times"/></span>
                        <div className="dashboard-message-text">
                            <i className="far fa-check green-bg"/>
                            <p>Your listing <a href="#">Park Central</a> has been approved! </p>
                        </div>
                        <div className="dashboard-message-time"><i className="fal fa-calendar-week"/> 28 may 2020</div>
                    </div>
                </div>
                {/* dashboard-list end*/}
                {/* dashboard-list end*/}
                <div className="dashboard-list fl-wrap">
                    <div className="dashboard-message">
                        <span className="new-dashboard-item"><i className="fal fa-times"/></span>
                        <div className="dashboard-message-text">
                            <i className="far fa-heart purp-bg"/>
                            <p>Someone bookmarked your <a href="#">Holiday Home</a> listing!</p>
                        </div>
                        <div className="dashboard-message-time"><i className="fal fa-calendar-week"/> 28 may 2020</div>
                    </div>
                </div>
                {/* dashboard-list end*/}
                {/* dashboard-list end*/}
                <div className="dashboard-list fl-wrap">
                    <div className="dashboard-message">
                        <span className="new-dashboard-item"><i className="fal fa-times"/></span>
                        <div className="dashboard-message-text">
                            <i className="fal fa-comments-alt red-bg"/>
                            <p> Someone left a review on <a href="#">Park Central</a> listing!</p>
                        </div>
                        <div className="dashboard-message-time"><i className="fal fa-calendar-week"/> 28 may 2020</div>
                    </div>
                </div>
                {/* dashboard-list end*/}
                {/* dashboard-list end*/}
                <div className="dashboard-list fl-wrap">
                    <div className="dashboard-message">
                        <span className="new-dashboard-item"><i className="fal fa-times"/></span>
                        <div className="dashboard-message-text">
                            <i className="far fa-check green-bg"/>
                            <p> Your listing <a href="#">Holiday Home</a> has been approved! </p>
                        </div>
                        <div className="dashboard-message-time"><i className="fal fa-calendar-week"/> 28 may 2020</div>
                    </div>
                </div>
                {/* dashboard-list end*/}
                {/* dashboard-list end*/}
                <div className="dashboard-list fl-wrap">
                    <div className="dashboard-message">
                        <span className="new-dashboard-item"><i className="fal fa-times"/></span>
                        <div className="dashboard-message-text">
                            <i className="far fa-heart purp-bg"/>
                            <p>Someone bookmarked your <a href="#">Moonlight Hotel</a> listing!</p>
                        </div>
                        <div className="dashboard-message-time"><i className="fal fa-calendar-week"/> 28 may 2020</div>
                    </div>
                </div>
                {/* dashboard-list end*/}
            </div>
            {/* dashboard-list-box end*/}
        </div>
    );
};

export default Dashboard;