import React from 'react'
import Typewriter from 'typewriter-effect';


 function Type() {
  return (
      <Typewriter options={{
            strings: [
                "Front-End Developer",
                "Back-End Developer",
                "Designer",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
        }}
        />
    
  );
}

export default Type