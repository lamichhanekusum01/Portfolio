import React from "react";
import SocialIcon from "../../components/commonComponent/SocialIcon";
import "./Home.scss";
import Type from "./Type.js";
import resume from "../../assets/Kusum's resume.pdf";

import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
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
                     <span> Kusum Lamichhane</span>
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

                {/* <div className="social" >
                  <SocialIcon name="github" target="_blank" />
                  <SocialIcon name="email" target="_blank" />
                  <SocialIcon name="linkedin" target="_blank" />
                </div> */}
                <div className="social">
                <a href="https://github.com/lamichhanekusum01"><i class="fab fa-github"></i></a>
                <a href="https://mail.google.com/"><i class="fas fa-envelope"></i></a>
                <a href="https://www.linkedin.com/"><i class="fab fa-linkedin"></i></a>
                </div>
              </div>
            </div>
            <div className="col image-container">
              <div className="image"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
