import React from 'react'
import "../../pages/aboutMe/AboutMe.scss";
import image from '../../assets/Image/aboutImage.jpg'
import Card from '../../components/commonComponent/Card.js'
import Education from '../../components/commonComponent/Education.js'

const AboutMe = () => {
  return (
         <section className='about-me'>
           <div class="portfolio-container">
  <div class="hero">
    <img src={image} alt="Kusum" class="hero--image"/>
    <div class="hero--bio">
      <h1>Kusum Lamichhane</h1>
      <h3>Frontend Designer</h3>
      <p class="basic-info">I’m a Frontend designer. I’m passionate about creating good looking website. I have worked with incredibly talented people across different companies.</p>
     
    </div>
  </div>
  
    <h1 className='title'>My Specialities</h1>
  
  <div className="container">
  <div class="row">
    <div class="col ">
    <Card text="Front-End"
            img="fas fa-desktop"
            description="I can write HTML CSS and Javascript code . I can work on React projects"
         
     />
    </div>
    <div class="col">
    <Card  text="Back-End"
            img="fas fa-code"
            description="I am familiar with Asp .NET  MVC technology and can generate the APIS from Express."
         
     />
    </div>
    <div class="col">
    <Card  text="QA"
            img="fas fa-rocket"
            description="I am familiar with automation testing using pycharm and can write a test cases "
     />
    
    </div>
  </div>
</div>
<div className='container'>
    <h1 className='education '> Education</h1>
    <Education text="NEPAL BOARD" desc="I completed my primary level schooling with 86.86 % " duration="2003-2015" schoolname="Bal Geetanjali English School" />
    <Education text="HSEB" desc="I completed my Higher Secondary level schooling with 74.86 % " duration="2015-2017" schoolname="Vs Niketan College" />
    <Education text="TRIBHUWAN UNIVERSITY" desc="I am final year student of Bsc Csit program " duration="2017-2021" schoolname="Madan Bhandari Memorial College" />
  </div>

</div>


  

     </section>    
  )
}

export default AboutMe