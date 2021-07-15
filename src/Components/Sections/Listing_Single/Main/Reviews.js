import React from 'react';

import avatar1 from '../../../../Assets/images/avatar/1.jpg';
import all1 from '../../../../Assets/images/all/1.jpg';

const Review = () => {

    return (

        <>
            {/* list-single-main-item */}
            <div class="list-single-main-item fl-wrap block_box" id="reviews">
                <div class="list-single-main-item-title">
                    <h3>Item Reviews -  <span> 2 </span></h3>
                </div>
                {/*reviews-score-wrap*/}
                <div class="reviews-score-wrap fl-wrap">
                    <div class="review-score-total">
                                                    <span class="review-score-total-item">
                                                    4.1
                                                    </span>
                        <div class="listing-rating card-popup-rainingvis" data-starrating2="5"/>
                    </div>
                    <div class="review-score-detail">
                        {/* review-score-detail-list*/}
                        <div class="review-score-detail-list">
                            {/* rate item*/}
                            <div class="rate-item">
                                <div class="rate-item-title"><span>Quality</span></div>
                                <div class="rate-item-bg" data-percent="100%">
                                    <div class="rate-item-line gradient-bg"/>
                                </div>
                                <div class="rate-item-percent">5.0</div>
                            </div>
                            {/* rate item end*/}
                            {/* rate item*/}
                            <div class="rate-item">
                                <div class="rate-item-title"><span>Location</span></div>
                                <div class="rate-item-bg" data-percent="90%">
                                    <div class="rate-item-line gradient-bg"/>
                                </div>
                                <div class="rate-item-percent">4.0</div>
                            </div>
                            {/* rate item end*/}
                            {/* rate item*/}
                            <div class="rate-item">
                                <div class="rate-item-title"><span>Price</span></div>
                                <div class="rate-item-bg" data-percent="60%">
                                    <div class="rate-item-line gradient-bg"/>
                                </div>
                                <div class="rate-item-percent">3.0</div>
                            </div>
                            {/* rate item end*/}
                            {/* rate item*/}
                            <div class="rate-item">
                                <div class="rate-item-title"><span>Service</span></div>
                                <div class="rate-item-bg" data-percent="80%">
                                    <div class="rate-item-line gradient-bg"/>
                                </div>
                                <div class="rate-item-percent">4.0</div>
                            </div>
                            {/* rate item end*/}
                        </div>
                        {/* review-score-detail-list end*/}
                    </div>
                </div>
                {/* reviews-score-wrap end */}
                <div class="list-single-main-item_content fl-wrap">
                    <div class="reviews-comments-wrap">
                        {/* reviews-comments-item */}
                        <div class="reviews-comments-item">
                            <div class="review-comments-avatar">
                                <img src={avatar1} alt="" />
                            </div>
                            <div class="reviews-comments-item-text fl-wrap">
                                <div class="reviews-comments-header fl-wrap">
                                    <h4><a href="#">Liza Rose</a></h4>
                                    <div class="review-score-user">
                                        <span class="review-score-user_item">4.2</span>
                                        <div class="listing-rating card-popup-rainingvis" data-starrating2="4"/>
                                    </div>
                                </div>
                                <p>" Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. "</p>
                                <div class="reviews-comments-item-footer fl-wrap">
                                    <div class="reviews-comments-item-date"><span><i class="far fa-calendar-check"/>12 April 2018</span></div>
                                    <a href="#" class="rate-review"><i class="fal fa-thumbs-up"/>  Helpful Review  <span>2</span> </a>
                                </div>
                            </div>
                        </div>
                        {/*reviews-comments-item end*/}
                        {/* reviews-comments-item */}
                        <div class="reviews-comments-item">
                            <div class="review-comments-avatar">
                                <img src={avatar1} alt="" />
                            </div>
                            <div class="reviews-comments-item-text fl-wrap">
                                <div class="reviews-comments-header fl-wrap">
                                    <h4><a href="#">Adam Koncy</a></h4>
                                    <div class="review-score-user">
                                        <span class="review-score-user_item">5.0</span>
                                        <div class="listing-rating card-popup-rainingvis" data-starrating2="5"/>
                                    </div>
                                </div>
                                <p>" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere convallis purus non cursus. Cras metus neque, gravida sodales massa ut. "</p>
                                <div class="review-images ">
                                    <a href={all1} class="image-popup"><img src={all1} alt="" /></a>
                                    <a href={all1} class="image-popup"><img src={all1} alt="" /></a>
                                </div>
                                <div class="reviews-comments-item-footer fl-wrap">
                                    <div class="reviews-comments-item-date"><span><i class="far fa-calendar-check"/>03 December 2017</span></div>
                                    <a href="#" class="rate-review"><i class="fal fa-thumbs-up"/>  Helpful Review  <span>4</span> </a>
                                </div>
                            </div>
                        </div>
                        {/*reviews-comments-item end*/}
                    </div>
                </div>
            </div>
            {/* list-single-main-item end */}
            {/* list-single-main-item */}
            <div class="list-single-main-item fl-wrap block_box">
                <div class="list-single-main-item-title fl-wrap">
                    <h3>Add Review</h3>
                </div>
                {/* Add Review Box */}
                <div id="add-review" class="add-review-box">
                    {/* Review Comment */}
                    <form id="add-comment" class="add-comment  custom-form" name="rangeCalc" >
                        <fieldset>
                            <div class="review-score-form fl-wrap">
                                <div class="review-range-container">
                                    {/* review-range-item*/}
                                    <div class="review-range-item">
                                        <div class="range-slider-title">Cleanliness</div>
                                        <div class="range-slider-wrap ">
                                            <input type="text" class="rate-range" data-min="0" data-max="5"  name="rgcl"  data-step="1" defaultValue="4" />
                                        </div>
                                    </div>
                                    {/* review-range-item end */}
                                    {/* review-range-item*/}
                                    <div class="review-range-item">
                                        <div class="range-slider-title">Comfort</div>
                                        <div class="range-slider-wrap ">
                                            <input type="text" class="rate-range" data-min="0" data-max="5"  name="rgcl"  data-step="1"  defaultValue="1" />
                                        </div>
                                    </div>
                                    {/* review-range-item end */}
                                    {/* review-range-item*/}
                                    <div class="review-range-item">
                                        <div class="range-slider-title">Staf</div>
                                        <div class="range-slider-wrap ">
                                            <input type="text" class="rate-range" data-min="0" data-max="5"  name="rgcl"  data-step="1" defaultValue="5" />
                                        </div>
                                    </div>
                                    {/* review-range-item end */}
                                    {/* review-range-item*/}
                                    <div class="review-range-item">
                                        <div class="range-slider-title">Facilities</div>
                                        <div class="range-slider-wrap">
                                            <input type="text" class="rate-range" data-min="0" data-max="5"  name="rgcl"  data-step="1" defaultValue="3" />
                                        </div>
                                    </div>
                                    {/* review-range-item end */}
                                </div>
                                <div class="review-total">
                                    <span><input type="text" name="rg_total"   data-form="AVG({rgcl})" defaultValue="0" /></span>
                                    <strong>Your Score</strong>
                                </div>
                            </div>
                            <div class="list-single-main-item_content fl-wrap">
                                <div class="row">
                                    <div class="col-md-6">
                                        <label><i class="fal fa-user"/></label>
                                        <input type="text" placeholder="Your Name *" defaultValue=""/>
                                    </div>
                                    <div class="col-md-6">
                                        <label><i class="fal fa-envelope"/>  </label>
                                        <input type="text" placeholder="Email Address*" defaultValue=""/>
                                    </div>
                                </div>
                                <textarea cols="40" rows="3" placeholder="Your Review:"/>
                                <div class="clearfix"/>
                                <div class="listsearch-input-item fl-wrap">
                                    <div class="fuzone">
                                        <form>
                                            <div class="fu-text">
                                                <span><i class="fal fa-images"/> Click here or drop files to upload</span>
                                                <div class="photoUpload-files fl-wrap"/>
                                            </div>
                                            <input type="file" class="upload" multiple />
                                        </form>
                                    </div>
                                </div>
                                <div class="clearfix"/>
                                <button class="btn  color2-bg float-btn">Submit Review <i class="fal fa-paper-plane"/></button>
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