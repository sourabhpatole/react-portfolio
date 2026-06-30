import React, { useContext, useRef, useState } from 'react';
import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context/context';

const Contact = () => {
  const formRef = useRef(null);
  const [done, setDone] = useState(false);

  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_h7756tc',
        'template_hosambj',
        formRef.current,
        'qgBK0A6N75S9wt09K'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c" id="contact">
      <div className="c-bg"></div>

      <div className="c-wraper">
        {/* Left Section */}
        <div className="c-left">
          <h2 className="c-title">Let's Discuss Your Project</h2>

          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="Phone" className="c-icon" />
              +91 751 777 0319
            </div>

            <div className="c-info-item">
              <img src={Email} alt="Email" className="c-icon" />
              sourabhpatole@outlook.com
            </div>

            <div className="c-info-item">
              <img src={Address} alt="Location" className="c-icon" />

              <div className="google-map w-100">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7777.332930299348!2d80.24903851877693!3d12.929145668514936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1745468460723!5m2!1sen!2sin"
                  width="300"
                  height="200"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="c-right">
          <p className="c-desc">
            <b>Have an idea?</b> Feel free to get in touch. I'd love to discuss
            your project and help bring it to life.
          </p>

          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              style={{
                backgroundColor: darkMode ? '#333' : '',
              }}
            />

            <input
              type="text"
              name="user_subject"
              placeholder="Subject"
              required
              style={{
                backgroundColor: darkMode ? '#333' : '',
              }}
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              style={{
                backgroundColor: darkMode ? '#333' : '',
              }}
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Message"
              required
              style={{
                backgroundColor: darkMode ? '#333' : '',
              }}
            />

            <button type="submit">Send Message</button>

            {done && (
              <span
                style={{
                  display: 'block',
                  marginTop: '10px',
                  color: 'green',
                  fontWeight: '500',
                }}
              >
                Thank you! Your message has been sent successfully.
              </span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
