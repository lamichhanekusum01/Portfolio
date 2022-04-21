import React from "react";

const SocialIcon = ({src,icon}) => {
  return (
    <a
      href={src}
      target="_blank"
      class="contact-icon"
      rel="noreferrer"
    >
      <i class={icon}></i>
    </a>
  );
};

export default SocialIcon;
