import React from 'react';

const Scroll_Nav = (props) => {

    return (

        <div className="scroll-nav-wrapper fl-wrap">
            <div className="container">
                <nav className="scroll-nav scroll-init">
                    <ul className="no-list-style">
                        <li><a className="act-scrlink" href="#sec1"><i className="fal fa-images" /> Top</a></li>
                        {props.listing.Data.Title.Type === "Fitness" ?
                            <li><a href="#trainers"><i className="fal fa-running" />Trainers </a></li>
                            :
                            ""
                        }
                        <li><a href="#details"><i className="fal fa-info" />Details</a></li>
                        {props.listing.Data.Content_Widgets.Gallery.Display ?
                            <li><a href="#gallery"><i className="fal fa-image" />Gallery</a></li>
                            : ""
                        }
                        {props.listing.Data.Title.Type === "Service" ?
                            <li><a href="#services"><i className="fal fa-dumbbell" />Services</a></li>
                            : ""
                        }
                        <li><a href="#reviews"><i className="fal fa-comments-alt"/>Reviews</a></li>
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