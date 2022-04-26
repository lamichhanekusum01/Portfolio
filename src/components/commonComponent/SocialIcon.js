import React from "react";
import emailImg from"../../assets/SocialIcons/email.png"
import githubImg from"../../assets/SocialIcons/github.png"
import linkedinImg from"../../assets/SocialIcons/linkedin.png"

const SocialIcon = ({name }) => {
  var data=[{
    name:"linkedin",
    image:linkedinImg,
    href:"https://www.linkedin.com/"
  },
  {
    name:"github",
    image:githubImg,
    href:"https://www.facebook.com/"
  },
  {
    name:"email",
    image:emailImg,
    href:"https://www.instagram.com/"
  }
]
var social={} 
data.forEach(element => {
  if (element.name===name) {
    social=element
    
  }

 }); 
    return (
  
    <div class="link">
      <a href={social.href}>
        <img src={social.image} alt={name}/>
      </a>
    </div>
    // <a
    //   href={src}
    //   target="_blank"
    //   class="contact-icon"
    //   rel="noreferrer"
    // >
    //   <i class={icon}></i>
    // </a>
  );
};

export default SocialIcon;