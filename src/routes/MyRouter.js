import React from './MyRouter.js'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/body/Home.js';
import Contact from '../pages/contact/Contact.js';
import Projects from '../pages/portfolio/Projects.js';
import AboutMe from '../pages/aboutMe/AboutMe.js';




const MyRouter = () => {
  return (
    <> <Routes>
    <Route path="/" element={<Home /> } />
    <Route path="/Contact" element={<Contact /> }  ></Route>
    <Route path="/Portfolio" element={<Projects />}></Route>
    <Route path="/About" element={<AboutMe />}></Route>
    {/* <Route path="/" element={<><Body /> <Portfolio /> <Contact/></>}></Route> */}
  </Routes></>
  )
}

export default MyRouter