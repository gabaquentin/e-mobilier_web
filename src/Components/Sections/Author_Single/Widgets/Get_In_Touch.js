import React from 'react';

const Get_In_Touch = () => {

    return (

        <div className="box-widget-item fl-wrap block_box">
            <div className="box-widget-item-header">
                <h3>Get in Touch </h3>
            </div>
            <div className="box-widget">
                <div className="box-widget-content">
                    <form className="add-comment custom-form">
                        <fieldset>
                            <label><i className="fal fa-user"/></label>
                            <input type="text" placeholder="Your Name *" value=""/>
                            <div className="clearfix"/>
                            <label><i className="fal fa-envelope"/> </label>
                            <input type="text" placeholder="Email Address*" value=""/>
                            <textarea cols="40" rows="3" placeholder="Additional Information:"/>
                        </fieldset>
                        <button className="btn float-btn color2-bg">Send Message<i className="fal fa-paper-plane"/>
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Get_In_Touch;