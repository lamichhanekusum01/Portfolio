
import React, { useState, useEffect } from "react";
import "../contact/Contact.scss"
import axios from "axios";

function Contact ()  {
    const initialValues = { name: "", email: "", textarea: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const checkValidate = () => {
    setFormErrors(validate(formValues));
    
  };
  const handleSubmit = (e) => {
     e.preventDefault();
    setFormErrors(validate(formValues));
    if (Object.keys(formErrors).length === 0) {
    
              axios
          .post("http://localhost:4000/contact/", {
            fullname: formValues.name,
            email: formValues.email,
            message: formValues.textarea,
          })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        setFormValues(initialValues);
      }
      
    }

  const validate = (values) => {
    const errors = {};

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
   
    if (!values.name) {
      errors.name = "Fullname is required";
    }
   
    if (!values.email) {
      errors.email = "email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }
    if (!values.textarea) {
      errors.textarea = "textarea is required";
    }
    return errors;
  };

    return (
    <section id="contact">
    <div class="contact-box">
      <div class="contact-links">
        <h2>CONTACT</h2>
        <div class="links">
          <div class="link">
            <a><img src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin"/></a>
          </div>
          <div class="link">
            <a><img src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github"/></a>
          </div>
          <div class="link">
            <a><img src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen"/></a>
          </div>
          <div class="link">
            <a><img src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email"/></a>
          </div>
        </div>
      </div>
      <div class="contact-form-wrapper">
        <form >
          <div class="form-item">
            <input type="text" name="name" onChange={handleChange} onBlur={checkValidate} value={formValues.name}/>
            <label>Name:</label>
            <span> {formErrors.name}</span>
          </div>
          <div class="form-item">
            <input type="text" name="email" onChange={handleChange} onBlur={checkValidate} value={formValues.email}/>
            <label>Email:</label>
            <p> {formErrors.email}</p>

          </div>
          <div class="form-item">
            <textarea class="text" name="textarea" onChange={handleChange} onBlur={checkValidate} value={formValues.textarea}></textarea>
            <label>Message:</label>
            <p> {formErrors.textarea}</p>

          </div>
          <button onClick={handleSubmit} class="submit-btn">Send</button>  
        </form>
      </div>
    </div>
  </section>
  )
}


export default Contact