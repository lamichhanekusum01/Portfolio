import React from "react";
import SocialIcon from "../../components/commonComponent/SocialIcon";
import "./Home.scss";
import Type from "./Type.js";
import resume from "../../assets/Kusum's resume.pdf";

import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section id="home">
      <div className="container">
        <div className="row">
          <div className="col intro-text">
            <div className="introduction">
              <div className="intro">
                <div className="laptop">
                  <i class="fa fa-laptop" aria-hidden="true"></i>
                </div>
                <h1>
                  I'm <span> Kusum Lamichhane</span>
                </h1>
                <p className="move-text">
                  <Type />
                </p>
                <p> Developer based on kathmandu,Nepal</p>
              </div>
              <div className="buttons">
                <button
                  className="hireMeButton"
                  onClick={() => navigate("/contact")}
                >
                  Hire Me
                </button>
                <a href={resume} download="Kusum's resume">
                  <button className="hireMeButton">Download CV</button>
                </a>
              </div>

              <div className="social">
                <SocialIcon name="github" />
                <SocialIcon name="email" />
                <SocialIcon name="linkedin" />
              </div>
            </div>
          </div>
          <div className="col image-container">
            <div className="image"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
