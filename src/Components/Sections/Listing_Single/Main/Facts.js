import React from 'react';
import { useParams } from "react-router-dom";
import Edit from '../Widgets/Edit';

const Facts = (props) => {
    const { Id, Mode } = useParams();
    return (

        <div className="list-single-facts fl-wrap">
                <div className="row">
                    <div className="col-md-4">
                        {/* inline-facts */}
                        <div className="inline-facts-wrap gradient-bg ">
                            <div className="inline-facts">
                                <i className="fal fa-smile-plus" />
                                <div className="milestone-counter">
                                    <div className="stats animaper">
                                        <div className="num" data-content="0" data-num="245">0</div>
                                    </div>
                                </div>
                                <h6>New Visiters Every Week</h6>
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
                                <i className="fal fa-users" />
                                <div className="milestone-counter">
                                    <div className="stats animaper">
                                        <div className="num" data-content="0" data-num="2557">0</div>
                                    </div>
                                </div>
                                <h6>Happy customers every year</h6>
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
                                <i className="fal fa-award" />
                                <div className="milestone-counter">
                                    <div className="stats animaper">
                                        <div className="num" data-content="0" data-num="25">0</div>
                                    </div>
                                </div>
                                <h6>Won Awards</h6>
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
    );
};

export default Facts;