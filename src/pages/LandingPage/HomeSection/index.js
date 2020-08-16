import React from 'react';

// Modules

import classNames from 'classnames';

// Components

import { ContentWidthLimiter } from '../../../components/ContentWidthLimiter';
import { Header } from './Header';

import homeDecorationLeft from '../../../assets/images/home-decoration-left.png';
import homeDecorationRight from '../../../assets/images/home-decoration-right.png';

// Styles

import './styles.scss';

// ----------------

export const HomeSection = () => {
  const nameClass = () =>
    classNames({
      'section home': true,
    });

  return (
    <div className={nameClass()} id="home">
      <Header />
      <img
        className="home-decoration home-decoration--left"
        src={homeDecorationLeft}
      />
      <img
        className="home-decoration home-decoration--right"
        src={homeDecorationRight}
      />
    </div>
  );
};
