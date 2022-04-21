import React from 'react';
import {Link} from 'react-router-dom'

const NavElement = ({src,title}) => {
  return (
    <Link to={src}>{title}</Link> 
    
  )
}

export default NavElement