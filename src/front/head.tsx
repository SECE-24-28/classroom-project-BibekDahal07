import React from "react";
import { HeadStyle } from "./headstyle";

export const Head = () => {
  return (
    <HeadStyle>
      <div className="head-box">
        <div className="heading">
          <h1 className="head">Aptitude Guru Hem</h1>
        </div>
        <div className="sub-title">
          <h2 className="sub-heading">
            At AGH, we shape futures and build skills that <br />
            <span className="red-sub-heading">
              {" "}
              <em> strive for your excellence.</em>
            </span>
          </h2>

          <p className="para">
            Where Success Meets Opportunity! Are you ready to embark on a
            transformative journey towards success? At Aptitude Guru Hem, we are
            committed to providing you with the essential skills and knowledge
            to excel in your professional endeavors. Our expert training in
            aptitude and coding equips you to conquer every challenge, from
            company interview assessments to prestigious coding platforms like
            LeetCode, GeeksForGeeks, HackerRank , and more.
          </p>
        </div>
        <div className="button-box">
          <button className="start-button">Start Your Learning</button>
          <button className="join-button">Join a Live Demo</button>
        </div>
      </div>
    </HeadStyle>
  );
};
