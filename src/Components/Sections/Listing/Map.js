import React from 'react';

const Map = () => {

    return (

        <div className="map-container column-map right-pos-map no-fix-scroll-map hid-mob-map">
            <div id="map-main"/>
            <ul className="mapnavigation no-list-style">
                <li><a href="#" className="prevmap-nav mapnavbtn"><span><i className="fas fa-caret-left"/></span></a></li>
                <li><a href="#" className="nextmap-nav mapnavbtn"><span><i className="fas fa-caret-right"/></span></a></li>
            </ul>
            <div className="scrollContorl mapnavbtn tolt"   data-microtip-position="top-left" data-tooltip="Enable Scrolling"><span><i className="fal fa-unlock"/></span></div>
            <div className="location-btn geoLocation tolt" data-microtip-position="top-left" data-tooltip="Your location"><span><i className="fal fa-location"/></span></div>
            <div className="map-overlay"/>
            <div className="map-close"><i className="fas fa-times"/></div>
        </div>

    );
};

export default Map;