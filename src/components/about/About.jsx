import React, { useContext } from 'react';
import './about.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from '@mui/material';
import ResumePreview from '../../img/Sourabh.png';
import { ThemeContext } from '../../context/context';

const About = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  return (
    <section className="a" id="about">
      <div className="a-left">
        <div className="a-card bg"></div>

        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Sourabh Patole"
            className="a-img"
          />
        </div>
      </div>

      <div className="a-right">
        <h1 className="a-title">About Me</h1>

        <p className="a-sub">
          Full Stack MERN Developer with 4+ years of experience.
        </p>

        <p className="a-desc">
          I specialize in developing scalable web applications using React.js,
          Node.js, Express.js, MongoDB, PostgreSQL and REST APIs. I enjoy
          solving real-world problems, writing clean code, and building modern
          applications with excellent user experiences.
        </p>

        <div className="social-button">
          <a
            href="https://github.com/sourabhpatole"
            target="_blank"
            rel="noopener noreferrer"
            className="b-icon"
          >
            <GitHubIcon
              sx={{
                fontSize: 42,
                color: darkMode ? '#fff' : '#000',
              }}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/sourabh-patole-4b9568136/"
            target="_blank"
            rel="noopener noreferrer"
            className="b-icon"
          >
            <LinkedInIcon
              sx={{
                fontSize: 42,
                color: '#0A66C2',
              }}
            />
          </a>
        </div>

        <div className="a-award">
          <img
            src={ResumePreview}
            alt="Resume Preview"
            className="award-image"
          />

          <div className="a-award-texts">
            <h3 className="a-award-title">Resume</h3>

            <p className="a-award-desc">
              Download my latest resume to learn more about my professional
              experience, technical skills, and projects.
            </p>

            <Button
              variant="contained"
              component="a"
              href="https://drive.google.com/file/d/1bA1rEMPzUEcDIkLOAZFGwETz2NCfPu3o/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
