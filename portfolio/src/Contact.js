import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

function Contact() {


    // sending email with emailjs
    const emailForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_svusqgc', 'template_3yaw09y', emailForm.current, 'ixGI-b4B1dm19tGbz')
          .then((result) => {
            <h1>Success!</h1>
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return (
        <div className="contactContainer">
           <h2 id="emailHeader">Send me an email! (aaronlallydev@gmail.com)</h2>
           <form id="sendEmailForm" ref={emailForm} onSubmit={sendEmail}>
            <label className="formLabels" for="FullName">Full Name</label>
            <input id="fullName" type="text" placeholder="Full Name" name="userFullName" required/>
            <label className="formLabels" for="userEmail">Your Email Address</label>
            <input id="userEmail" type="email" placeholder="Email" name="userEmail" required/>
            <label className="formLabels" for="emailSubject">Subject</label>
            <input id="emailSubject" type="text" placeholder="Subject" name="emailSubject" required />
            <label className="formLabels" for="emailMessage">Message</label>
            <textarea placeholder="Message" id="emailContent" name="emailMessage"></textarea>
            <button id="emailSubmitButton"type="submit">Send</button>
           </form>
        </div>
    )
}

export default Contact;