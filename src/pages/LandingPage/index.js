import React from 'react';

// Components

import { FeaturesSection } from './FeaturesSection';
import { AboutSection } from './AboutSection';
import { HomeSection } from './HomeSection';
import { MenuSection } from './MenuSection';

// Styles

import './styles.scss';

// ----------------

export const LandingPage = () => {
  return (
    <div className="landing">
      <HomeSection />
      <AboutSection />
      <FeaturesSection />
      <MenuSection />
    </div>
  );
};
