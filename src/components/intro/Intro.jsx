import React from 'react';
import './intro.css';
import Me from '../../img/me.png';

const Intro = () => {
  return (
    <section className="i" id="intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-introg">Hi, I'm</h2>
          <h1 className="i-name">Sourabh Patole</h1>
          <div className="i-title">
            <div className="i-title-wraper">
              <div className="i-title-item">Full Stack MERN Developer</div>
              <div className="i-title-item">React.js Developer</div>
              <div className="i-title-item">Node.js Developer</div>
              <div className="i-title-item">JavaScript Developer</div>
            </div>
          </div>

          <p className="i-desc">
            Full Stack MERN Developer with 4+ years of experience building
            scalable, responsive, and high-performance web applications using
            React.js, Node.js, Express.js, MongoDB, PostgreSQL, and REST APIs.
            Passionate about creating clean, efficient, and user-friendly
            solutions that deliver real business value.
          </p>
        </div>

        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g id="scroll">
            <path
              d="M40.5 15L34.5 9L28.5 15"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M28.5 24L34.5 30L40.5 24"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M9 37.5H60"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M34.5 27V9"
              strokeWidth="2.9895"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27V48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48V27Z"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>

      <div className="i-right">
        <div className="i-bg"></div>

        <img
          src={Me}
          alt="Sourabh Patole - Full Stack MERN Developer"
          className="i-img"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default React.memo(Intro);
