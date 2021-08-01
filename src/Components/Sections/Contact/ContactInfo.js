import React, { useContext, useState } from "react";

import { UserContext } from "../../../Contexts/User/userContext";

const ContactInfo = () => {

  const [state] = useContext(UserContext);
  
  return (
    <div className="col-md-4">
      <div className="ab_text-title fl-wrap">
        <h3>Get in Touch</h3>
        <span className="section-separator fl-sec-sep"></span>
      </div>
      <div className="box-widget-item fl-wrap block_box">
        <div className="box-widget">
          <div className="box-widget-content bwc-nopad">
            <div className="list-author-widget-contacts list-item-widget-contacts bwc-padside">
              <ul className="no-list-style">
                <li>
                  <span>
                    <i className="fal fa-map-marker"></i> Adress :
                  </span>{" "}
                  <a href="#singleMap" className="custom-scroll-link">
                    USA 27TH Brooklyn NY
                  </a>
                </li>
                <li>
                  <span>
                    <i className="fal fa-phone"></i> Phone :
                  </span>{" "}
                  <a href="#">+7(123)987654</a>
                </li>
                <li>
                  <span>
                    <i className="fal fa-envelope"></i> Mail :
                  </span>{" "}
                  <a href="#">emobilier237@gmail.com</a>
                </li>
              </ul>
            </div>
            <div className="list-widget-social bottom-bcw-box  fl-wrap">
              <ul className="no-list-style">
                <li>
                  <a href="#" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fab fa-vk"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
