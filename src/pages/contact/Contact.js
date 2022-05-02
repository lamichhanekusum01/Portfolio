
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../contact/Contact.scss"
import axios from "axios";
import SocialIcon from "../../components/commonComponent/SocialIcon"
import Footer from "../../components/commonComponent/Footer.js";

toast.configure();

function Contact ()  {
  const initialValues = { name: "", email: "", textarea: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [formValid, setFormValid] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const checkValidate = () => {
    setFormErrors(validate(formValues));
    
  };
  const handleSubmit = (e) => {
    debugger;
    setFormValid(false);
    console.log("HEllo here");
    setFormErrors(validate(formValues));
    if (Object.keys(formErrors).length === 0 && formValid) {
    
      axios.post("http://localhost:4000/contact/", {
            fullname: formValues.name,
            email: formValues.email,
            message: formValues.textarea,
          })
          .then((res) =>{
            toast("Yaay, I will respond to this query soon :D");
            setFormValues(initialValues);
          })
          .catch((err) => toast.error("Failed to submit!!"));
        
      }
    e.preventDefault();
    return false;
  };

  const validate = (values) => {
    const errors = {};

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    setFormValid(true)
    if (!values.name) {
      setFormErrors(false)
      errors.name = "Fullname is required";
    }
   
    if (!values.email) {
      setFormValid(false)
      errors.email = "email is required";
    } else if (!regex.test(values.email)) {
      setFormValid(false)
      errors.email = "This is not a valid email";
    }
    if (!values.textarea) {
      setFormValid(false)
      errors.textarea = "textarea is required";
    }
    return errors;
  };

    return (
      <>
    <section id="contact">
    <div class="contact-box">
      <div class="contact-links">
        <h2>CONTACT</h2>
        <div class="links">
        <SocialIcon name="github"target="_blank" />
              <SocialIcon name="email" target="_blank"/>
              <SocialIcon name="linkedin"target="blank" />
                 </div>
      </div>
      <div class="contact-form-wrapper">
        <ToastContainer/>
        <form >
          <div class="form-item">
            <input type="text" name="name" onChange={handleChange} onBlur={checkValidate} value={formValues.name}/>
            <label>Name:</label>
            <span> {formErrors.name}</span>
          </div>
          <div class="form-item">
            <input type="text" name="email" onChange={handleChange} onBlur={checkValidate} value={formValues.email}/>
            <label>Email:</label>
            <span> {formErrors.email}</span>

          </div>
          <div class="form-item">
            <textarea class="text" name="textarea" onChange={handleChange} onBlur={checkValidate} value={formValues.textarea}></textarea>
            <label>Message:</label>
            <span> {formErrors.textarea}</span>

          </div>
          <button onClick={handleSubmit} class="submit-btn">Send</button>  
          
        </form>
      </div>
    </div>

  </section>
    <Footer/>
</>
  )
}


export default Contact