import React, { Component } from 'react';

import bg1 from '../../../Assets/images/bg/1.jpg';

class Sec3 extends Component {

    render() {

        return (
            <section className="parallax-section small-par" data-scrollax-parent="true">
                <div className="bg par-elem " data-bg={bg1} data-scrollax="properties: { translateY: '30%' }"></div>
                <div className="overlay  op7"></div>
                <div className="container">
                    <div class=" single-facts single-facts_2 fl-wrap">
                        {/* inline-facts */}
                        <div className="inline-facts-wrap">
                            <div className="inline-facts">
                                <div className="milestone-counter">
                                    <div className="stats animaper">
                                        <div className="num" data-content="0" data-num="1254">1254</div>
                                    </div>
                                </div>
                                <h6>New Visiters Every Week</h6>
                            </div>
                        </div>
                        {/* inline-facts end */}
                        {/* inline-facts */}
                        <div className="inline-facts-wrap">
                            <div className="inline-facts">
                                <div className="milestone-counter">
                                    <div className="stats animaper">
                                        <div className="num" data-content="0" data-num="12168">12168</div>
                                    </div>
                                </div>
                                <h6>Happy customers every year</h6>
                            </div>
                        </div>
                        {/* inline-facts end */}
                        {/* inline-facts */}
                        <div className="inline-facts-wrap">
                            <div className="inline-facts">
                                <div className="milestone-counter">
                                    <div className="stats animaper">
                                        <div className="num" data-content="0" data-num="2172">2172</div>
                                    </div>
                                </div>
                                <h6>Won Amazing Awards</h6>
                            </div>
                        </div>
                        {/* inline-facts end */}
                        {/* inline-facts */}
                        <div className="inline-facts-wrap">
                            <div className="inline-facts">
                                <div className="milestone-counter">
                                    <div className="stats animaper">
                                        <div className="num" data-content="0" data-num="732">732</div>
                                    </div>
                                </div>
                                <h6>New Listing Every Week</h6>
                            </div>
                        </div>
                        {/* inline-facts end */}
                    </div>
                </div>
            </section>
        );
    }
}

export default Sec3;