import React from 'react';

// Components

import { Button } from '../../../components/Button';

// Styles

import './styles.scss';

// ----------------

export const FeaturesSection = () => {
  return (
    <div className="section features" id="features">
      <div className="features__wrapper">
        <h2 className="title features__title">Our Features</h2>
        <div className="subtitle features__subtitle">
          Lorem ipsum dolor sit amet
        </div>
        <Button color="orange">see more</Button>
      </div>
    </div>
  );
};
