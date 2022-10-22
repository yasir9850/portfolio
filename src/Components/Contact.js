import './Contact.css'
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoMailUnreadOutline } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';

const Result = () => {
  return (
    <p>Your message has been seuccessfully send</p>
  )
}

const Contact = () => {
  const [verified, setVerified] = useState(false)

  const [result, showResult] = useState(false)

  const form = useRef();

  const handlerecaptcha = () => {
    setVerified(true)
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0vnw8tn', 'template_rv63987', form.current, 'OsHViRSDs7w3oMKzC')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
    showResult(true)
  };

  // height result

  setTimeout(() => {
    showResult(false)
  }, 5000)


  return (
    <div className='contact-cont' id='contact'>
      <div className='cont-child-cont'>
        <h1 className='get-in-text'>Get in Touch</h1>
        <h3 className='feel-free-text'>Feel free to drop us a line to contact me</h3>
        <div className='third-child-cont-contact'>
          <div className='second-feel-cont'>
            <h1 className='second-feel-text'>Feel Free To Contact</h1>
            <p className='hello-dis-text'>Hello Everyone! Have a great day :) I am here to help you. If you want to know something or you have any suggestion then please mail me. Thank You.
            </p>
            <div className='location-icon-cont'><IoLocationOutline className='location-icon' /><span className='location-text'> Balapur, Maharashtra</span></div>
            <div className='email-icon-cont'><IoMailUnreadOutline className='email-icon' /><span className='email-text'> yasirubed1@gmail.com</span></div>
            <div className='phone-icon-cont'><IoCallOutline className='phone-icon' /><span className='phone-text'> +919850335955</span></div>

          </div>

          <div className='inputfield-cont'>
            <form onSubmit={sendEmail} ref={form}>
              <h2>Contact Me</h2>
              <input type='text' name='name' id='name' placeholder='Your Name' required />
              <input type='email' name='email' id='email' placeholder='Your E-mail' required />
              <textarea type='text' name='message' id='message' placeholder='Your Message' required />
              <ReCAPTCHA className='recaptch'
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={handlerecaptcha}
              />
              <button disabled={!verified}>Send</button>
              <div className='result-text'>{result ? <Result /> : null}</div>
            </form>
          </div>
        </div>
      </div>
      <div className='footer'>
        <h2>Designed & Developed by <span>Yasir Ubed Khan</span></h2>
        <div className='footer-icon'>
          <a target='__blank' href='https://www.thapatechnical.com/'><IoLogoInstagram /></a>
          <a target='__blank' href='https://www.thapatechnical.com/'><IoLogoLinkedin /></a>
          <a target='__blank' href='https://www.thapatechnical.com/'><IoLogoGithub /></a>
        </div>
      </div>
    </div>
  )
}

export default Contact