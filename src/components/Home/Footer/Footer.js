import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid mt-5 d-flex">
        <div className="col-lg-4 d-flex flex-column align-items-center footerDescriptionArea">
          <h2 className="footerHeading logo">Impel</h2>
          <p className="commonStyle footerDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            doloremque, dolore expedita laboriosam nulla sed.
          </p>
        </div>

        <div className="col-lg-2">
          <h2 className="footerHeading">About</h2>
          <h2 className="commonStyle">About Us</h2>
          <h2 className="commonStyle">Features</h2>
          <h2 className="commonStyle">News &amp; Blogs</h2>
        </div>
        <div className="col-lg-2">
          <h2 className="footerHeading">Movement</h2>
          <h2 className="commonStyle">What Impel</h2>
          <h2 className="commonStyle">Support Us</h2>
        </div>
        <div className="col-lg-2">
          <h2 className="footerHeading">Company</h2>
          <h2 className="commonStyle">Why Impel</h2>
          <h2 className="commonStyle">Address</h2>
          <h2 className="commonStyle">Security</h2>
        </div>
        <div className="col-lg-2">
          <h2 className="footerHeading">Support</h2>
          <h2 className="commonStyle">FAQs</h2>
          <h2 className="commonStyle">Support Center</h2>
          <h2 className="commonStyle">Contact Us</h2>
        </div>
      </div>
      <div className="container-fluid d-flex justify-content-around mt-3">
        <p className="commonStyle">@2022 Impel. All rights reserved</p>
        <div className="d-flex">
        <h2 className="commonStyle">Terms &amp; Agreements </h2>
        <h2 className="commonStyle"> Privacy Policy </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
