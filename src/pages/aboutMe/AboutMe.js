import React from "react";
import "../../pages/aboutMe/AboutMe.scss";
import image from "../../assets/Image/aboutImage.jpg";
import Footer from "../../components/commonComponent/Footer.js";
import Card from "../../components/commonComponent/Card.js";
import Education from "../../components/commonComponent/Education.js";
import jsimage from "../../assets/Image/javascript.png";
import aspimage from "../../assets/Image/asp.net.png";
import javaimage from "../../assets/Image/java.png";
import cssimage from "../../assets/Image/css.png";
import reactimage from "../../assets/Image/react_nobg.png";
import mongodbimage from "../../assets/Image/mongoodb.png";
import Skills from "../../components/commonComponent/Skills";

const AboutMe = () => {
  return (
    <section className="about-me">
      <div class="portfolio-container">
        <div class="hero">
          <img src={image} alt="Kusum" class="hero--image" />
          <div class="hero--bio">
            <h1>Kusum Lamichhane</h1>
            <h3>Frontend Designer</h3>
            <p class="basic-info">
              I’m a Frontend designer. I’m passionate about creating good
              looking website. I have worked with incredibly talented people
              across different companies.
            </p>
          </div>
        </div>
        <div className="container specialities">
          <h1 className="title">My Specialities</h1>
          <div class="main">
            <div className="container">
              <div className="row">
                
                <Skills
                  alt="javascript"
                  image={jsimage}
                  className="Skill"
                  experince="I have experience of writing codes in Js for 6 months"
                  langauge="JAVASCRIPT"
                  level="Beginner"
                />
                <Skills
                  alt="Asp .Net"
                  image={aspimage}
                  className="Skill"
                  experince="I have experience of writing codes in Js for 3 months"
                  langauge="C#"
                  level="Beginner"
                />
                <Skills
                  alt="Java"
                  image={javaimage}
                  className="Skill"
                  experince="I have experience of writing codes in Java for 3 months"
                  langauge="JAVA"
                  level="Beginner"
                />
                <Skills
                  alt="Css"
                  image={cssimage}
                  className="Skill"
                  experince="I have experience using css and sass for styling the webpages for 6 months"
                  langauge="CSS"
                  level="Beginner"
                />
                <Skills
                  alt="Mongoo"
                  image={mongodbimage}
                  className="Skill"
                  experince="I have experience using mongoodb database for 2 months"
                  langauge="MONGODB"
                  level="Beginner"
                />
                <Skills
                  alt="React"
                  image={reactimage}
                  className="Skill"
                  experince="I have experience of designing the web pages for 2 months"
                  langauge="REACT"
                  level="Beginner"
                />
                {/* <Skills
                  alt="React"
                  image={reactimage}
                  className="Skill"
                  experince="I have experience of writing codes in Java for 3 months"
                  langauge="REACT"
                  level="Beginner"
                /> */}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container">
          <div class="row">
            <div class="col ">
              <Card
                text="Front-End"
                img="fas fa-desktop"
                description="I can write HTML CSS and Javascript code . I can work on React projects"
              />
            </div>
            <div class="col">
              <Card
                text="Back-End"
                img="fas fa-code"
                description="I am familiar with Asp .NET  MVC technology and can generate the APIS from Express."
              />
            </div>
            <div class="col">
              <Card
                text="QA"
                img="fas fa-rocket"
                description="I am familiar with automation testing using pycharm and can write a test cases "
              />
            </div>
          </div>
        </div> */}

        {/* <div className="container">
          <h1 className="education "> Education</h1>
          <Education
            text="NEPAL BOARD"
            desc="I completed my primary level schooling with 86.86 % "
            duration="2003-2015"
            schoolname="Bal Geetanjali English School"
          />
          <Education
            text="HSEB"
            desc="I completed my Higher Secondary level schooling with 74.86 % "
            duration="2015-2017"
            schoolname="Vs Niketan College"
          />
          <Education
            text="TRIBHUWAN UNIVERSITY"
            desc="I am final year student of Bsc Csit program "
            duration="2017-2021"
            schoolname="Madan Bhandari Memorial College"
          />
        </div> */}
      </div>
      <Footer />
    </section>
  );
};

export default AboutMe

