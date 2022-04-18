import React from "react";
import SocialIcon from "../../components/commonComponent/SocialIcon";
import "./Home.scss";
import Type from "./Type.js";

const Home = () => {
  return (
    <div className="my_image">
      <div className="wrapper ">
        <div className="container">
          <div className="row">
            <div className="col introduction">
              <div className="intro">
                <h1>
                  I'm <span>Kusum</span> Lamichhane
                </h1>
                <p>
                
                  <Type />
                </p>
                <p> Developer based on kathmandu,Nepal</p>
              </div>
              <div className="social">
                <SocialIcon
                  src={"https://www.facebook.com/kusum.lamichhane.9/"}
                  icon={"fab fa-facebook-f"}
                />
                <SocialIcon
                  src={"https://www.instagram.com/kushum__/"}
                  icon={"fab fa-instagram"}
                />
                <SocialIcon
                  src={"https://www.linkedin.com/in/kusum-lamichhane/"}
                  icon={"fab fa-linkedin-in"}
                />
              </div>
            </div>
            <div className="col "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
