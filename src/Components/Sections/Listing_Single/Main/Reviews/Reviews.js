import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../../../../Contexts/User/userContext";
import { Add_Review } from "../../../../../Contexts/Review/service";
import { LikeOrDisLike } from "../../../../../Contexts/Review/service";
import { db } from "../../../../../firebase";

import avatar1 from "../../../../../Assets/images/avatar/1.jpg";
import all1 from "../../../../../Assets/images/all/1.jpg";

const Reviews = ({ review }) => {
  const [state] = useContext(UserContext);
  const [like, setLike] = useState([]);
  let [dislikes, setDislikes] = useState();
  console.log(state.user.uid);
  function DisLike() {
    setLike({
      review : review.id ,
      user : state.user.uid,
      type : "Dislikes"
    });
    console.log(like);
    LikeOrDisLike(like);
  }

  function set_Dislike() {
    db.collection("Dislikes").onSnapshot((snapshot) => {
      var isDislike = false ;
        snapshot.forEach((doc) => {
              if(doc.user.id == state.user.uid){
                isDislike = true;
              }
          });
          if(isDislike){
            return(<button className="rate-review" onClick={DisLike}>
            <i className="fas fa-thumbs-down" />
              <span>4</span>
            </button>);
          }
          return(<button className="rate-review" onClick={DisLike}>
          <i className="fal fa-thumbs-down" />
            <span>4</span>
          </button>);
    });
  }
  return (
    <>
      {/* reviews-comments-item */}
      <div className="reviews-comments-item">
        <div className="review-comments-avatar">
          <img src={avatar1} alt="" />
        </div>
        <div className="reviews-comments-item-text fl-wrap">
          <div className="reviews-comments-header fl-wrap">
            <h4>
              <a href="#">{review.data.user.displayName} </a>
            </h4>
            <div className="review-score-user">
              <span className="review-score-user_item">
                {review.data.rate.total}
              </span>
              <div
                className="listing-rating card-popup-rainingvis"
                data-starrating2={review.data.rate.total}
              />
            </div>
          </div>
          <p>{review.data.review}</p>
          <div className="reviews-comments-item-footer fl-wrap">
            <div className="reviews-comments-item-date">
              <span>
                <i className="far fa-calendar-check" />
                03 December 2017
              </span>
            </div>
            < setDislikes />
            <a href="#" className="rate-review">
              <i className="fas fa-thumbs-up" />
              <span>4</span>
            </a>
          </div>
        </div>
      </div>
      {/*reviews-comments-item end*/}
    </>
  );
};
const Review = () => {
  const [state] = useContext(UserContext);
  const { Id } = useParams();
  const [name, setName] = useState(state.user.displayName);
  const [email, setEmail] = useState(state.user.email);
  const [review, setReview] = useState();
  const [image, setImage] = useState();
  const [reviewLists, setReviewLists] = useState([]);
  const [numberReview, setNumberReview] = useState(4);

  let reviewText = [];

  useEffect(() => {
    const reviewLists = db
      .collection("Reviews")
      .orderBy("date", "desc")
      .limit(numberReview)
      .onSnapshot((snapshot) => {
        var reviews = [];
        if (snapshot.size) {
          snapshot.forEach((doc) => {
            reviews.push({
              data: doc.data(),
              id: doc.id,
            });
          });
          setReviewLists(reviews);
        } else {
          // it's empty
        }
      });
    return () => {
      reviewLists();
    };
  }, db);

  console.log(reviewLists);
  reviewLists.forEach((r) => {
    reviewText.push(<Reviews review={r} />);
  });
  const addReview = (e) => {
    e.preventDefault();
    const reviews = {
      user: {
        id: state.user.uid,
        firstName: state.user.First_Name,
        lastName: state.user.displayName,
        email: state.user.email,
      },
      object: {
        type: "Listings",
        id: Id,
      },
      review: review,
      rate: {
        quality: document.querySelector("#quality").value,
        location: document.querySelector("#location").value,
        price: document.querySelector("#price").value,
        service: document.querySelector("#service").value,
        total: document.querySelector("#total").value,
      },
    };
    Add_Review(reviews);
  };
  return (
    <>
      {/* list-single-main-item */}
      <div className="list-single-main-item fl-wrap block_box" id="reviews">
        <div className="list-single-main-item-title">
          <h3>
            Item Reviews - <span>{reviewLists.length}</span>
          </h3>
        </div>
        {/*reviews-score-wrap*/}
        <div className="reviews-score-wrap fl-wrap">
          <div className="review-score-total">
            <span className="review-score-total-item">4.1</span>
            <div
              className="listing-rating card-popup-rainingvis"
              data-starrating2="5"
            />
          </div>
          <div className="review-score-detail">
            {/* review-score-detail-list*/}
            <div className="review-score-detail-list">
              {/* rate item*/}
              <div className="rate-item">
                <div className="rate-item-title">
                  <span>Quality</span>
                </div>
                <div className="rate-item-bg" data-percent="100%">
                  <div className="rate-item-line gradient-bg" />
                </div>
                <div className="rate-item-percent">5.0</div>
              </div>
              {/* rate item end*/}
              {/* rate item*/}
              <div className="rate-item">
                <div className="rate-item-title">
                  <span>Location</span>
                </div>
                <div className="rate-item-bg" data-percent="90%">
                  <div className="rate-item-line gradient-bg" />
                </div>
                <div className="rate-item-percent">4.0</div>
              </div>
              {/* rate item end*/}
              {/* rate item*/}
              <div className="rate-item">
                <div className="rate-item-title">
                  <span>Price</span>
                </div>
                <div className="rate-item-bg" data-percent="60%">
                  <div className="rate-item-line gradient-bg" />
                </div>
                <div className="rate-item-percent">3.0</div>
              </div>
              {/* rate item end*/}
              {/* rate item*/}
              <div className="rate-item">
                <div className="rate-item-title">
                  <span>Service</span>
                </div>
                <div className="rate-item-bg" data-percent="80%">
                  <div className="rate-item-line gradient-bg" />
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
            {reviewText}

            <a href="#" lassName="rate-review">
              <i className="fal fa-plus" />
              <span>Show More ...</span>
            </a>
            <a href="#" className="rate-review">
              <i className="fal fa-minus" />
              <span>Show Less ...</span>
            </a>
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
          <form
            id="add-comment"
            className="add-comment  custom-form"
            name="rangeCalc"
            onSubmit={addReview}
          >
            <fieldset>
              <div className="review-score-form fl-wrap">
                <div className="review-range-container">
                  {/* review-range-item*/}
                  <div className="review-range-item">
                    <div className="range-slider-title">Quality</div>
                    <div className="range-slider-wrap ">
                      <input
                        type="text"
                        className="rate-range"
                        id="quality"
                        data-min="0"
                        data-max="5"
                        name="rgcl"
                        data-step="1"
                        defaultValue="3"
                      />
                    </div>
                  </div>
                  {/* review-range-item end */}
                  {/* review-range-item*/}
                  <div className="review-range-item">
                    <div className="range-slider-title">Location</div>
                    <div className="range-slider-wrap ">
                      <input
                        type="text"
                        id="location"
                        className="rate-range"
                        data-min="0"
                        data-max="5"
                        name="rgcl"
                        data-step="1"
                        defaultValue="3"
                      />
                    </div>
                  </div>
                  {/* review-range-item end */}
                  {/* review-range-item*/}
                  <div className="review-range-item">
                    <div className="range-slider-title">SPrice</div>
                    <div className="range-slider-wrap ">
                      <input
                        type="text"
                        className="rate-range"
                        id="price"
                        data-min="0"
                        data-max="5"
                        name="rgcl"
                        data-step="1"
                        defaultValue="3"
                      />
                    </div>
                  </div>
                  {/* review-range-item end */}
                  {/* review-range-item*/}
                  <div className="review-range-item">
                    <div className="range-slider-title">Service</div>
                    <div className="range-slider-wrap">
                      <input
                        type="text"
                        id="service"
                        className="rate-range"
                        data-min="0"
                        data-max="5"
                        name="rgcl"
                        data-step="1"
                        defaultValue="3"
                      />
                    </div>
                  </div>
                  {/* review-range-item end */}
                </div>
                <div className="review-total">
                  <span>
                    <input
                      id="total"
                      type="text"
                      name="rg_total"
                      data-form="AVG({rgcl})"
                      defaultValue="0"
                    />
                  </span>
                  <strong>Your Score</strong>
                </div>
              </div>
              <div className="list-single-main-item_content fl-wrap">
                <div className="row">
                  <div className="col-md-6">
                    <label>
                      <i className="fal fa-user" />
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label>
                      <i className="fal fa-envelope" />{" "}
                    </label>
                    <input
                      type="text"
                      placeholder="Email Address*"
                      defaultValue=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <textarea
                  cols="40"
                  rows="3"
                  placeholder="Your Review:"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                />
                <div className="clearfix" />
                <div className="listsearch-input-item fl-wrap">
                  <div className="fuzone">
                    <form>
                      <div className="fu-text">
                        <span>
                          <i className="fal fa-images" /> Click here or drop
                          files to upload
                        </span>
                        <div className="photoUpload-files fl-wrap" />
                      </div>
                      <input type="file" className="upload" multiple />
                    </form>
                  </div>
                </div>
                <div className="clearfix" />
                <button className="btn  color2-bg float-btn">
                  Submit Review <i className="fal fa-paper-plane" />
                </button>
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
