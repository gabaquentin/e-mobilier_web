import React, { Component } from 'react';

import logo from '../../../Assets/images/logo.png';
import api1 from '../../../Assets/images/api/1.jpg';
import api1_png from '../../../Assets/images/api.png';

class Sec7 extends Component {

    render() {

        return (
            <section className="gradient-bg hidden-section" data-scrollax-parent="true">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="colomn-text  pad-top-column-text fl-wrap">
                                <div className="colomn-text-title">
                                    <h3>Our App   Available Now</h3>
                                    <p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida. Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit.</p>
                                    <a href="#" className=" down-btn color3-bg"><i className="fab fa-apple"/>  Apple Store </a>
                                    <a href="#" className=" down-btn color3-bg"><i className="fab fa-android"/>  Google Play </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="collage-image">
                                <img src={api1_png} className="main-collage-image" alt="" />                               
                                <div className="images-collage-title color2-bg icdec"> <img src={logo}   alt="" /></div>
                                <div className="images-collage_icon green-bg" style={{ right: '-20px', top: '120px' }}><i className="fal fa-thumbs-up"/></div>
                                <div className="collage-image-min cim_1"><img src={api1} alt="" /></div>
                                <div className="collage-image-min cim_2"><img src={api1} alt="" /></div>
                                <div className="collage-image-btn green-bg">Booking now</div>
                                <div className="collage-image-input">Search <i className="fa fa-search"/></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gradient-bg-figure" style={{right: '-30px', top: '10px'}}/>
                <div className="gradient-bg-figure" style={{left: '-20px', bottom: '30px'}}/>
                <div className="circle-wrap" style={{ left: '270px', top: '120px' }} data-scrollax="properties: { translateY: '-200px' }">
                    <div className="circle_bg-bal circle_bg-bal_small"/>
                </div>
                <div className="circle-wrap" style={{ right: '420px', bottom: '-70px' }} data-scrollax="properties: { translateY: '150px' }">
                    <div className="circle_bg-bal circle_bg-bal_big"/>
                </div>
                <div className="circle-wrap" style={{ left: '420px', top: '-70px' }} data-scrollax="properties: { translateY: '100px' }">
                    <div className="circle_bg-bal circle_bg-bal_big"/>
                </div>
                <div className="circle-wrap" style={{ left: '40%', bottom: '-70px' }}  >
                    <div className="circle_bg-bal circle_bg-bal_middle"/>
                </div>
                <div className="circle-wrap" style={{ right: '40%', top: '-10px' }}  >
                    <div className="circle_bg-bal circle_bg-bal_versmall" data-scrollax="properties: { translateY: '-350px' }"/>
                </div>
                <div className="circle-wrap" style={{ right: '55%', top: '90px' }}  >
                    <div className="circle_bg-bal circle_bg-bal_versmall" data-scrollax="properties: { translateY: '-350px' }"/>
                </div>
            </section>
        );
    }
}

export default Sec7;