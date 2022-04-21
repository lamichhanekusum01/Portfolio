
import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';



const Type = () => {
  return (
    <TypeWriterEffect
            textStyle={{ fontFamily: 'arial', 
            fontSize:'1 em'
           }}
            startDelay={100}
            cursorColor="black"
            text="Make it work, make it right, make it fast"
            typeSpeed={120}
            
           
          />

  )
}

export default Type