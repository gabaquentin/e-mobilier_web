import React, { Component } from 'react';

class Preloader extends Component {

    render() {
        return (
            <div className="loader-wrap">
                <div className="loader-inner">
                    <div className="loader-inner-cirle"/>
                </div>
            </div>
        );
    }
}

export default Preloader;