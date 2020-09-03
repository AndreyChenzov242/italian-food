import React from 'react';

// Components

import { FeaturesSection } from './FeaturesSection';
import { AboutSection } from './AboutSection';
import { HomeSection } from './HomeSection';
import { MenuSection } from './MenuSection';
import { ContactsSection } from './ContactsSection';
import { FooterSection } from './FooterSection';
import { ButtonUp } from '../../components/ButtonUp';

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
      <ContactsSection />
      <FooterSection />
      <ButtonUp className="landing__button-up" />
    </div>
  );
};
