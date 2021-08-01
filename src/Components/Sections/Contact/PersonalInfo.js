import React, { useContext, useState } from "react";
import { Add_Contact } from "../../../Contexts/Contact/service";
import { UserContext } from "../../../Contexts/User/userContext";

const PersonalInfo = (props) => {
  const [state] = useContext(UserContext);
  const [email, setEmail] = useState(state.user.email);
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");


  console.log(state.user);
  const handleSubmit = (e) => {
      const contact = {
        user : state.user.uid,
        subject : subject,
        body : content
      }
      Add_Contact(contact);
      setContent("");
      setSubject("");
  }
  return (
    <>
      <div className="col-md-8">
        <div className="ab_text">
          <div className="ab_text-title fl-wrap">
            <h3>Contact Us</h3>
            <span className="section-separator fl-sec-sep"></span>
          </div>
          <p>If you have a problem or a remark to report you can do it here</p>
          <div id="contact-form">
            <div id="message"></div>
            <form
              className="custom-form"
              name="contactform"
              id="contactform"
              onSubmit = {handleSubmit}
            >
              <fieldset>
                <label htmlFor="email">
                  <i class="fal fa-envelope"></i>
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email *"
                  value={email}
                  onChange = {e => setEmail(e.target.value)}
                  disabled
                />

                <div className="clearfix"></div>

                <label htmlFor="subject">
                  <i class="fal fa-book"></i>
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter The Subject *"
                  value={subject}
                  onChange = {e => setSubject(e.target.value)}
                />

                <textarea
                  name="comments"
                  id="comments"
                  cols="40"
                  rows="3"
                  placeholder="Enter Your Message *"
                  value={content}
                  onChange = {e => setContent(e.target.value)}
                ></textarea>
              </fieldset>
              <button className="btn float-btn color2-bg" id="submit">
                Send Message<i class="fal fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
