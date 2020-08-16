import React from 'react';

// Components
import { HomeSection } from './HomeSection';

// Styles

import './styles.scss';

// ----------------

export const LandingPage = () => {
  return (
    <div className="landing">
      <HomeSection />
      <div
        className="section"
        id="info"
        style={{ backgroundColor: 'red' }}
      ></div>
    </div>
  );
};
