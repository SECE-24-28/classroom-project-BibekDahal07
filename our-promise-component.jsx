import React from "react";

import { FaLaptopCode } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaMobileScreen } from "react-icons/fa6";
import { FaDiamondTurnRight } from "react-icons/fa6";
import { HiOutlineSupport } from "react-icons/hi";
import { MdOutlineSecurity } from "react-icons/md";

import { OurPromiseStyle } from "./our-promise-style";

export const OurPromiseComponent = () => {
  return (
    <OurPromiseStyle>
      <div className="container">
        <div className="heading">
          <h1 className="title">Our Promise</h1>

          <p className="sub-title">
            As part of our high quality service, we'd like to offer something
            extra too.
          </p>
        </div>
        <div className="promises">
          <div className="promise-card code-quality">
            <div className="sub-heading">
              <div className="icon-wrap" aria-hidden="true">
                <FaLaptopCode className="code-icon1" />
              </div>
              <h2>Top Code Quality</h2>
            </div>
            <div className="sub-content">
              <p>
                Our commitment goes beyond mere code - it encompasses providing
                solutions. You receive W3C fully compliant markup, without any
                compromise on quality.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="promise-card responsive">
            <div className="sub-heading">
              <div className="icon-wrap" aria-hidden="true">
                <FaMobileScreen className="code-icon2" />
              </div>
              <h2>Responsive</h2>
            </div>
            <div className="sub-content">
              <p>
                We understand the value of a positive attitude, timely
                responsiveness, and adaptability. We're dedicated to attentively
                listening and leveraging our utmost capabilities to serve you.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="promise-card team">
            <div className="sub-heading">
              <div className="icon-wrap" aria-hidden="true">
                <RiTeamFill className="code-icon3" />
              </div>
              <h2>Rockstar Team</h2>
            </div>
            <div className="sub-content">
              <p>
                Our expertise is our unique selling proposition. You'll have
                access to an all-star team of experienced professionals fully
                dedicated to serving you, armed with coding skills that are
                truly exceptional.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="promise-card turn-arounds">
            <div className="sub-heading">
              <div className="icon-wrap" aria-hidden="true">
                <FaDiamondTurnRight className="code-icon4" />
              </div>
              <h2>Fast Turn-arounds</h2>
            </div>
            <div className="sub-content">
              <p>
                The importance of speed is on par with quality for us. We are
                swift, nimble, and capable of providing high-quality code within
                a timeframe that suits your preferences.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="promise-card support">
            <div className="sub-heading">
              <div className="icon-wrap" aria-hidden="true">
                <HiOutlineSupport className="code-icon5" />
              </div>
              <h2>Life-time support</h2>
            </div>
            <div className="sub-content">
              <p>
                Our commitment to code quality is exemplified by our enduring
                support. If any bugs happen to emerge in the future, feel free
                to reach out to us for assistance.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="promise-card security">
            <div className="sub-heading">
              <div className="icon-wrap" aria-hidden="true">
                <MdOutlineSecurity className="code-icon6" />
              </div>
              <h2>Secured Agreement</h2>
            </div>
            <div className="sub-content">
              <p>
                The creative work you receive is entirely your own, and we
                unequivocally respect that. We assure you of our commitment and
                readiness to formalize this with a Non-Disclosure Agreement
                (NDA).
              </p>
            </div>
          </div>
        </div>
      </div>
    </OurPromiseStyle>
  );
};

export default OurPromiseComponent;
