import React from "react";

import all1 from "../../../Assets/images/all/1.jpg";
import avatar1 from "../../../Assets/images/avatar/1.jpg";
import bgContact from "../../../Assets/images/bg/1.jpg";
import SubFooter from "../../Layouts/SubFooter";
import { Link } from "react-router-dom";
import ContactInfo from "./ContactInfo";
import PersonalInfo from "./PersonalInfo";

const Contact = () => {
  const owner = {
    name: "Alisa Noore",
    avatar: avatar1,
    email: "yourmail@domain.com",
    phone: "+38099231212",
  };

  return (
    <div className="content">
      <section className="parallax-section single-par" data-scrollax-parent="true">
        <div
          className="bg par-elem "
          data-bg={bgContact}
          data-scrollax="properties: { translateY: '30%' }"
        ></div>
        <div className="overlay op7"></div>
        <div className="container">
          <div className="section-title center-align big-title">
            <h2>
              <span>Contact Us </span>
            </h2>
            <span className="section-separator"></span>
            <div className="breadcrumbs fl-wrap">
              <a href="/">Home</a>
              <span>Contacts</span>
            </div>
          </div>
        </div>
        <div className="header-sec-link">
          <a href="#sec1" class="custom-scroll-link">
            <i className="fal fa-angle-double-down"></i>
          </a>
        </div>
      </section>
      <section id="sec1" data-scrollax-parent="true">
        <div className="container">
          <div className="about-wrap">
            <div className="row">
              <ContactInfo />
              <PersonalInfo />
            </div>
          </div>
        </div>
      </section>
      <SubFooter />
    </div>
  );
};

export default Contact;
