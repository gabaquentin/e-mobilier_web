import React, { useContext, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

import avatar1 from '../../../../../Assets/images/avatar/1.jpg';
import all1 from '../../../../../Assets/images/all/1.jpg';

const Review = () => {

    const { Id } = useParams();
    console.log("Iden : " + Id);

    return (

        <>
            {/* list-single-main-item */}
            <div className="list-single-main-item fl-wrap block_box" id="reviews">
                <div className="list-single-main-item-title">
                    <h3>Item Reviews -  <span> 2</span></h3>
                </div>
                {/*reviews-score-wrap*/}
                <div className="reviews-score-wrap fl-wrap">
                    <div className="review-score-total">
                                                    <span className="review-score-total-item">
                                                    4.1
                                                    </span>
                        <div className="listing-rating card-popup-rainingvis" data-starrating2="5"/>
                    </div>
                    <div className="review-score-detail">
                        {/* review-score-detail-list*/}
                        <div className="review-score-detail-list">
                            {/* rate item*/}
                            <div className="rate-item">
                                <div className="rate-item-title"><span>Quality</span></div>
                                <div className="rate-item-bg" data-percent="100%">
                                    <div className="rate-item-line gradient-bg"/>
                                </div>
                                <div className="rate-item-percent">5.0</div>
                            </div>
                            {/* rate item end*/}
                            {/* rate item*/}
                            <div className="rate-item">
                                <div className="rate-item-title"><span>Location</span></div>
                                <div className="rate-item-bg" data-percent="90%">
                                    <div className="rate-item-line gradient-bg"/>
                                </div>
                                <div className="rate-item-percent">4.0</div>
                            </div>
                            {/* rate item end*/}
                            {/* rate item*/}
                            <div className="rate-item">
                                <div className="rate-item-title"><span>Price</span></div>
                                <div className="rate-item-bg" data-percent="60%">
                                    <div className="rate-item-line gradient-bg"/>
                                </div>
                                <div className="rate-item-percent">3.0</div>
                            </div>
                            {/* rate item end*/}
                            {/* rate item*/}
                            <div className="rate-item">
                                <div className="rate-item-title"><span>Service</span></div>
                                <div className="rate-item-bg" data-percent="80%">
                                    <div className="rate-item-line gradient-bg"/>
                                </div>
                                <div className="rate-item-percent">4.0</div>
                            </div>
                            {/* rate item end*/}
                        </div>
                        {/* review-score-detail-list end*/}
                    </div>
                </div>
                {/* reviews-score-wrap end */}
                <div className="list-single-main-item_content fl-wrap">
                    <div className="reviews-comments-wrap">
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
                                        <div className="listing-rating card-popup-rainingvis" data-starrating2="4"/>
                                    </div>
                                </div>
                                <p>" Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. "</p>
                                <div className="reviews-comments-item-footer fl-wrap">
                                    <div className="reviews-comments-item-date"><span><i className="far fa-calendar-check"/>12 April 2018</span></div>
                                    <a href="#" className="rate-review"><i className="fal fa-thumbs-up"/>  Helpful Review  <span>2</span> </a>
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
                                        <div className="listing-rating card-popup-rainingvis" data-starrating2="5"/>
                                    </div>
                                </div>
                                <p>" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere convallis purus non cursus. Cras metus neque, gravida sodales massa ut. "</p>
                                <div className="review-images ">
                                    <a href={all1} className="image-popup"><img src={all1} alt="" /></a>
                                    <a href={all1} className="image-popup"><img src={all1} alt="" /></a>
                                </div>
                                <div className="reviews-comments-item-footer fl-wrap">
                                    <div className="reviews-comments-item-date"><span><i className="far fa-calendar-check"/>03 December 2017</span></div>
                                    <a href="#" className="rate-review"><i className="fal fa-thumbs-up"/>  Helpful Review  <span>4</span> </a>
                                </div>
                            </div>
                        </div>
                        {/*reviews-comments-item end*/}
                    </div>
                </div>
            </div>
            {/* list-single-main-item end */}
            {/* list-single-main-item */}
            <div className="list-single-main-item fl-wrap block_box">
                <div className="list-single-main-item-title fl-wrap">
                    <h3>Add Review</h3>
                </div>
                {/* Add Review Box */}
                <div id="add-review" className="add-review-box">
                    {/* Review Comment */}
                    <form id="add-comment" className="add-comment  custom-form" name="rangeCalc" >
                        <fieldset>
                            <div className="review-score-form fl-wrap">
                                <div className="review-range-container">
                                    {/* review-range-item*/}
                                    <div className="review-range-item">
                                        <div className="range-slider-title">Cleanliness</div>
                                        <div className="range-slider-wrap ">
                                            <input type="text" className="rate-range" data-min="0" data-max="5"  name="rgcl"  data-step="1" defaultValue="4" />
                                        </div>
                                    </div>
                                    {/* review-range-item end */}
                                    {/* review-range-item*/}
                                    <div className="review-range-item">
                                        <div className="range-slider-title">Comfort</div>
                                        <div className="range-slider-wrap ">
                                            <input type="text" className="rate-range" data-min="0" data-max="5"  name="rgcl"  data-step="1"  defaultValue="1" />
                                        </div>
                                    </div>
                                    {/* review-range-item end */}
                                    {/* review-range-item*/}
                                    <div className="review-range-item">
                                        <div className="range-slider-title">Staf</div>
                                        <div className="range-slider-wrap ">
                                            <input type="text" className="rate-range" data-min="0" data-max="5"  name="rgcl"  data-step="1" defaultValue="5" />
                                        </div>
                                    </div>
                                    {/* review-range-item end */}
                                    {/* review-range-item*/}
                                    <div className="review-range-item">
                                        <div className="range-slider-title">Facilities</div>
                                        <div className="range-slider-wrap">
                                            <input type="text" className="rate-range" data-min="0" data-max="5"  name="rgcl"  data-step="1" defaultValue="3" />
                                        </div>
                                    </div>
                                    {/* review-range-item end */}
                                </div>
                                <div className="review-total">
                                    <span><input type="text" name="rg_total"   data-form="AVG({rgcl})" defaultValue="0" /></span>
                                    <strong>Your Score</strong>
                                </div>
                            </div>
                            <div className="list-single-main-item_content fl-wrap">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label><i className="fal fa-user"/></label>
                                        <input type="text" placeholder="Your Name *" defaultValue=""/>
                                    </div>
                                    <div className="col-md-6">
                                        <label><i className="fal fa-envelope"/>  </label>
                                        <input type="text" placeholder="Email Address*" defaultValue=""/>
                                    </div>
                                </div>
                                <textarea cols="40" rows="3" placeholder="Your Review:"/>
                                <div className="clearfix"/>
                                <div className="listsearch-input-item fl-wrap">
                                    <div className="fuzone">
                                        <form>
                                            <div className="fu-text">
                                                <span><i className="fal fa-images"/> Click here or drop files to upload</span>
                                                <div className="photoUpload-files fl-wrap"/>
                                            </div>
                                            <input type="file" className="upload" multiple />
                                        </form>
                                    </div>
                                </div>
                                <div className="clearfix"/>
                                <button className="btn  color2-bg float-btn">Submit Review <i className="fal fa-paper-plane"/></button>
                            </div>
                        </fieldset>
                    </form>
                </div>
                {/* Add Review Box / End */}
            </div>
            {/* list-single-main-item end */}
        </>

    );
};

export default Review;