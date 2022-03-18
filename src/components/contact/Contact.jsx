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
          <h2 className="c-title">Let's discuss your projects</h2>
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
              Pune
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
