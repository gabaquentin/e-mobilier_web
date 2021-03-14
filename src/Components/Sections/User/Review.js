import React, { useEffect } from 'react';

import { appendScript } from '../../../Assets/utils/appendScript';

import avatar1 from '../../../Assets/images/avatar/1.jpg';
import all1 from '../../../Assets/images/all/1.jpg';

const Review = () => {

    return (
        <div className="col-md-9">
            <div className="dashboard-title   fl-wrap">
                <h3>Your Reviews </h3>
            </div>
            {/* profile-edit-container*/}
            <div className="profile-edit-container fl-wrap block_box">
                {/* reviews-comments-item */}
                                <div className="reviews-comments-item">
                    <div className="review-comments-avatar">
                        <img src={avatar1} alt="" /> 
                                    </div>
                        <div className="reviews-comments-item-text fl-wrap">
                            <div className="reviews-comments-header fl-wrap">
                                <h4><a href="#">Liza Rose</a></h4>
                                <div className="review-score-user">
                                    <span className="review-score-user_item">4.2</span>
                                    <div className="listing-rating card-popup-rainingvis" data-starrating2="4"></div>
                                </div>
                            </div>
                            <p>" Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. "</p>
                            <div className="reviews-comments-item-footer fl-wrap">
                                <div className="reviews-comments-item-date"><span><i className="far fa-calendar-check"></i>12 April 2018</span></div>
                                <a href="#" className="rate-review"><i className="fal fa-reply"></i>  Reply </a>
                            </div>
                        </div>
                    </div>
                    {/*reviews-comments-item end*/}
                                {/* reviews-comments-item */}
                                <div className="reviews-comments-item">
                        <div className="review-comments-avatar">
                            <img src={avatar1} alt="" /> 
                                    </div>
                            <div className="reviews-comments-item-text fl-wrap">
                                <div className="reviews-comments-header fl-wrap">
                                    <h4><a href="#">Adam Koncy</a></h4>
                                    <div className="review-score-user">
                                        <span className="review-score-user_item">5.0</span>
                                        <div className="listing-rating card-popup-rainingvis" data-starrating2="5"></div>
                                    </div>
                                </div>
                                <p>" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere convallis purus non cursus. Cras metus neque, gravida sodales massa ut. "</p>
                                <div className="review-images ">
                                    <a href={all1} className="image-popup"><img src={all1} alt="" /></a>
                                        <a href={all1} className="image-popup"><img src={all1} alt="" /></a>
                                        </div>
                                        <div className="reviews-comments-item-footer fl-wrap">
                                            <div className="reviews-comments-item-date"><span><i className="far fa-calendar-check"></i>03 December 2017</span></div>
                                            <a href="#" className="rate-review"><i className="fal fa-reply"></i>  Reply </a>
                                        </div>
                                    </div>
                                </div>
                                {/*reviews-comments-item end*/}
                                {/* reviews-comments-item */}
                                <div className="reviews-comments-item">
                                    <div className="review-comments-avatar">
                                        <img src={avatar1} alt="" /> 
                                    </div>
                                        <div className="reviews-comments-item-text fl-wrap">
                                            <div className="reviews-comments-header fl-wrap">
                                                <h4><a href="#">Anna Dorenn </a></h4>
                                                <div className="review-score-user">
                                                    <span className="review-score-user_item">4.8</span>
                                                    <div className="listing-rating card-popup-rainingvis" data-starrating2="5"></div>
                                                </div>
                                            </div>
                                            <p>" Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. "</p>
                                            <div className="reviews-comments-item-footer fl-wrap">
                                                <div className="reviews-comments-item-date"><span><i className="far fa-calendar-check"></i>12 April 2018</span></div>
                                                <a href="#" className="rate-review"><i className="fal fa-reply"></i>  Reply </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/*reviews-comments-item end*/}
                            </div>
                                {/* profile-edit-container end*/}
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
    );
}

export default Review;