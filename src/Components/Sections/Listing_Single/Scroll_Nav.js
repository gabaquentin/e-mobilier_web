import React from 'react';

const Scroll_Nav = () => {

    return (

        <div className="scroll-nav-wrapper fl-wrap">
            <div className="container">
                <nav className="scroll-nav scroll-init">
                    <ul className="no-list-style">
                        <li><a className="act-scrlink" href="#sec1"><i className="fal fa-images"/> Top</a></li>
                        <li><a href="#sec2"><i className="fal fa-running"/>Trainers </a></li>
                        <li><a href="#sec3"><i className="fal fa-info"/>Details</a></li>
                        <li><a href="#sec4"><i className="fal fa-image"/>Gallery</a></li>
                        <li><a href="#sec5"><i className="fal fa-dumbbell"/>Services</a></li>
                        <li><a href="#sec6"><i className="fal fa-comments-alt"/>Reviews</a></li>
                    </ul>
                </nav>
                <div className="scroll-nav-wrapper-opt">
                    <a href="#" className="scroll-nav-wrapper-opt-btn"> <i className="fas fa-heart"/> Save </a>
                    <a href="#" className="scroll-nav-wrapper-opt-btn showshare"> <i className="fas fa-share"/> Share
                    </a>
                    <div className="share-holder hid-share">
                        <div className="share-container  isShare"/>
                    </div>
                    <div className="show-more-snopt"><i className="fal fa-ellipsis-h"/></div>
                    <div className="show-more-snopt-tooltip">
                        <a href="#"> <i className="fas fa-comment-alt"/> Write a review</a>
                        <a href="#"> <i className="fas fa-flag-alt"/> Report </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Scroll_Nav;