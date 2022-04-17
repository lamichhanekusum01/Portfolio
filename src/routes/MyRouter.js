import React from './MyRouter.js'
import { Routes, Route } from "react-router-dom";
import Home from '../components/body/Home';
import Contact from '../components/contact/Contact.js';
import Projects from '../components/portfolio/Projects.js';



const MyRouter = () => {
  return (
    <> <Routes>
    <Route path="/" element={<Home /> } />
    <Route path="/Contact" element={<Contact /> }  ></Route>
    <Route path="/Portfolio" element={<Projects />}></Route>
    {/* <Route path="/" element={<><Body /> <Portfolio /> <Contact/></>}></Route> */}
  </Routes></>
  )
}

export default MyRouter