import React from "react";
import { TrustedByStyle } from "./trusted-by-style";
import { FaUniversity, FaUserTie, FaBook, FaUserGraduate } from "react-icons/fa";

const TrustedBy = () => {
  return (
    <TrustedByStyle>
      <div className="container">
        <h1 className="title">Trusted By</h1>

        <div className="stats">

          <div className="card teal">
            <div className="icon"><FaUniversity /></div>
            <h2>100+</h2>
            <p>COLLEGES</p>
          </div>

          <div className="card blue">
            <div className="icon"><FaUserTie /></div>
            <h2>150</h2>
            <p>PROFESSIONAL TRAINERS</p>
          </div>

          <div className="card yellow">
            <div className="icon"><FaBook /></div>
            <h2>1000+</h2>
            <p>STUDY MATERIALS</p>
            <span>AGH LMS</span>
          </div>

          <div className="card red">
            <div className="icon"><FaUserGraduate /></div>
            <h2>1,00,000</h2>
            <p>STUDENTS</p>
            <span>B2B: Placement Training</span>
          </div>

        </div>
      </div>
    </TrustedByStyle>
  );
};

export default TrustedBy;
