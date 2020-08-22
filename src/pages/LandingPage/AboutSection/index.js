import React from 'react';

// Components

import aboutImage from '../../../assets/images/about-image.jpg';

// Styles

import './styles.scss';

// ----------------

export const AboutSection = () => {
  return (
    <div className="section about" id="info">
      <div className="about__wrapper">
        <div className="column">
          <div className="about__article">
            <h2 className="title">About us</h2>
            <div className="subtitle about__subtitle">
              The Best Food &amp; Drinks
            </div>
            <div className="about__line"></div>
            <p className="about__descr">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="about__descr">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="column">
          <img className="about__image" src={aboutImage} alt="aboutImage" />
        </div>
      </div>
    </div>
  );
};
