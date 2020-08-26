import React from 'react';

// Components

import homeDecorationRight from '../../../assets/images/home-decoration-right.png';
import homeDecorationLeft from '../../../assets/images/home-decoration-left.png';
import { Button } from '../../../components/Button';
import { Header } from './Header';

// Styles

import './styles.scss';

// ----------------

export const HomeSection = () => {
  return (
    <div className="section home" id="home">
      <Header />
      <img
        className="home-decoration home-decoration--left"
        src={homeDecorationLeft}
        alt="home-decoration"
      />
      <img
        className="home-decoration home-decoration--right"
        src={homeDecorationRight}
        alt="home-decoration"
      />
      <div className="home__content">
        <h1 className="home__h1">Italian</h1>
        <div className="home__subtitle">. Delicious Food .</div>
        <Button margin="mb-md" uppercase>
          see more
        </Button>
        <div className="home__text">Call Us!</div>
      </div>
    </div>
  );
};
