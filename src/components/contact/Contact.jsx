import useRef, { useContext, useState } from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context/context";
const Contact = () => {
  const formRef = useRef;
  const [done, setDone] = useState(false); //for check status
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const handlesubmit = (e) => {
    e.preventDefault();
    // use emailjs
    emailjs
      //use standard format on emailjs react doc
      .sendForm(
        "service_h7756tc",
        "template_hosambj",
        formRef.current,
        "qgBK0A6N75S9wt09K"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"> </div>
      <div className="c-wraper">
        <div className="c-left">
          <h2 className="c-title">Let's discuss about projects</h2>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 751 777 0319
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              sourabhpatole@outlook.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              <div className="google-map w-100">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7777.332930299348!2d80.24903851877693!3d12.929145668514936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1745468460723!5m2!1sen!2sin"
                  width="300"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Your Story</b> Get in touch
          </p>
          {/* make function for ref */}
          <form ref={formRef} onSubmit={handlesubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank you"}
            {/* after submit done */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
