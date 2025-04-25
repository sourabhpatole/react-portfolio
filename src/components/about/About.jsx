import React, { useContext } from "react";
import "./about.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Sourabh from "../../img/Sourabh.png";
import { ThemeContext } from "../../context/context";
import { Button } from "@mui/material";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">Find my profile and resume below</p>
        <p className="a-desc">
          <div className="social-button">
            <a
              className="b-icon"
              href={"https://github.com/sourabhpatole"}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon
                style={{
                  fontSize: "42px",
                  backgroundColor: darkMode && "white",
                }}
              />
            </a>
            <a
              // style={{ backgroundColor: darkMode && "#333" }}
              className="b-icon"
              href={"https://www.linkedin.com/in/sourabh-p-4b9568136/"}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon
                style={{
                  fontSize: "42px",
                  backgroundColor: darkMode && "white",
                }}
              />
              {/* resume link */}
              <a
                href={
                  "https://drive.google.com/file/d/1quvCCU1ke_0AWE3Nqj8qRTAQx6TkHFs2/view?usp=sharing"
                }
                className="b-icon "
                target="_blank"
                rel="noreferrer"
              ></a>
            </a>
          </div>
        </p>

        <div className="a-award">
          <div className="social-button">
            <Button className="link">
              <a
                href={
                  "https://drive.google.com/file/d/1quvCCU1ke_0AWE3Nqj8qRTAQx6TkHFs2/view?usp=sharing"
                }
                className=""
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginLeft: "20px",
                  marginTop: "0px",
                  backgroundColor: darkMode && "white",
                }}
              >
                Resume
              </a>
            </Button>
            <img
              className="award-image"
              src={Sourabh}
              alt="Sourabh Resume"
              style={{ height: "130px", marginLeft: "20px" }}
            />
          </div>
          <div className="a-award-texts">
            {/* <h4 className="a-award-title">International Design Awards 2021</h4> */}
            <p className="a-award-desc">
              I am Computer Science Engineer, Who is passionate to building
              Website and Web Application
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
