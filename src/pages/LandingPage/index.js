import React from 'react';

// Components
import { HomeSection } from './HomeSection';
import { AboutSection } from './AboutSection';

// Styles

import './styles.scss';

// ----------------

export const LandingPage = () => {
  return (
    <div className="landing">
      <HomeSection />
      <AboutSection/>
    </div>
  );
};
