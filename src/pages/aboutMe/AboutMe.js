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
  <div className='container'>
    <h1 className='title'>My Specialities</h1>
  </div>
  <div className="container">
  <div class="row">
    <div class="col ">
    <Card      text="Front-End"
            img="fas fa-desktop"
            description="Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser."
         
     />
    </div>
    <div class="col">
    <Card  text="Back-End"
            img="fas fa-code"
            description="Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser."
         
     />
    </div>
    <div class="col">
    <Card  text="QA"
            img="fas fa-rocket"
            description="Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser."
     />
    
    </div>
  </div>
</div>
<div className='container'>
  
</div>

</div>


  

     </section>    
  )
}

export default AboutMe