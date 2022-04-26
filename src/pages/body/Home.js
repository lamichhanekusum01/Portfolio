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
                <div className="laptop"><i class="fa fa-laptop" aria-hidden="true"></i></div>

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
                 name="github"

                />
                <SocialIcon
                  name="email"
                />
                <SocialIcon
                  name="linkedin"
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
