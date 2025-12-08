import React from "react";
import { ContactUsStyle } from "./contact-us-style";

const ContactUs = () => {
  return (
    <ContactUsStyle>
      <div className="get-in-touch">
        <div className="container">
          <div className="content">
            <h1>GET IN TOUCH</h1>
            <p>
              Have questions or feedback? We're here to help. Send us a message
              and we'll respond soon.
            </p>
            <button>Contact Us</button>
          </div>
          <div className="design">
            <div className="icon"></div>
            <img
              src="https://www.aptitudeguruhem.com/static/media/get-in-touch.8c521c235d4bd711343c.jpg"
              alt="cantactus-img"
            />
          </div>
        </div>
      </div>
    </ContactUsStyle>
  );
};
export default ContactUs;
