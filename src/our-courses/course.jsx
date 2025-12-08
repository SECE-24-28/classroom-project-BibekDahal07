import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { CourseStyle } from "./course-style";

export const Course = () => {
  return (
    <CourseStyle>
      <div className="course">
        <div className="container">
          <div className="head">
            <div className="title">Our Courses</div>
            <div className="para">
              Explore a wide range of curated courses for every learner.
              Structured to enhance knowledge, skills, and career growth.
            </div>
          </div>
          <div className="body">
            <div className="item1">
              <div className="image">
                <img
                  src="https://res.cloudinary.com/dotsjvnys/image/upload/v1715770719/AGH-Nov/HeroSection/aptitude_ch2mz0.jpg"
                  alt="item1"
                />
              </div>
              <div className="rate">
                <IoStarSharp className="star" />
                <IoStarSharp className="star" />
                <IoStarSharp className="star" />
                <IoStarSharp className="star" />
                <IoStarSharp className="star" />5
              </div>
              <h2>Aptitude Complete Preparation</h2>
              <p>
                Recommended: Final year students <br />
                Duration: 1 Year
              </p>
              <div className="price">12,000 + GST 24,999</div>
              <div className="buttons">
                <button className="buy">Buy Now</button>
                <button className="more">Know More</button>
              </div>
            </div>

            <div className="item2">
              <div className="image">
                <img
                  src="https://res.cloudinary.com/dotsjvnys/image/upload/v1715770721/AGH-Nov/HeroSection/programming_e05rx7.png"
                  alt="item2"
                />
              </div>
              <div className="stars">
                <IoStarSharp className="star" />
                <IoStarSharp className="star" />
                <IoStarSharp className="star" />
                <IoStarSharp className="star" />
                <IoStarSharp className="star" />
                4.9
              </div>
              <h2>Technical Complete Peparation</h2>
              <p>
                Recommended: Final year students <br />
                Duration: 1 year
              </p>
              <div className="price">12,000 + GST 24,999</div>
              <div className="buttons">
                <button className="buy">Buy Now</button>
                <button className="more">Know More</button>
              </div>
            </div>

            <div className="item3">
              <div className="image">
                <img
                  src="https://res.cloudinary.com/dotsjvnys/image/upload/v1715770718/AGH-Nov/HeroSection/web-development_bfpidr.png"
                  alt="item3"
                />
              </div>
              <div className="stars">
                <IoStarSharp className="star" />
                <IoStarSharp className="star" />
                <IoStarSharp className="star" />
                <IoStarSharp className="star" />
                <IoStarSharp className="star" />
                4.4
              </div>
              <h2>MERN Fullstack</h2>
              <p>
                Recommended: Final year students <br />
                Duration: 1 year
              </p>
              <div className="price">29,999 + GST 39,999</div>
              <div className="buttons">
                <button className="buy">Buy Now</button>
                <button className="more">Know More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CourseStyle>
  );
};
export default Course;
