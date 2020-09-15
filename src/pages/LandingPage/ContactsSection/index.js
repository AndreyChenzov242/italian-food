import React from 'react';

// Assets

import logo from '../../../assets/images/logo-without-text.png';

// Styles

import './styles.scss';

// ----------------

export const ContactsSection = () => {
  return (
    <div className="contacts" id="contacts">
      <div className="contacts__wrapper">
        <div className="contacts__logo-wrapper">
          <img src={logo} alt="logo" />
          <div className="logo__text">
            Italian <br /> Food
          </div>
        </div>
        <div className="subtitle contacts__subtitle">
          Lorem ipsum dolor sit amet, consectetur
        </div>
      </div>
    </div>
  );
};
