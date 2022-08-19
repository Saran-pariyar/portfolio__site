import React from "react";
import "./about.css";
import SkillsCard from "../SkillsCard/SkillsCard";
import profile from "./profile.jpg";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-me-section">
        <p className="about-title">About Me : </p>
        <div className="image-and-text-section">
          <img src={profile} alt="Profile Image" className="profile-img" />
          <article className="about-description-section">
            <header className="desc-heading">Hi! Nice to meet you :) </header>
            <p className="desc-text">
              My name is <span> Saran Pariyar </span> and I've been learning to
              code since 2020. I started with C++ and then moved to web
              development. I am currently learning and working on
              <span> Reactjs and Wordpress projects </span> .
              <br />
              <br />
              I've also learned PHP and MySQL in the past and have basic
              knowledge how they work together to make a fullstack website.
              <br />
              <br />
              Thanks !
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
