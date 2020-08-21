import React from 'react';

// Modules

import classNames from 'classnames';
import types from 'prop-types';

// Styles

import './styles.scss';

// ----------------

export const HamburgerButton = ({ onClick, isOpen }) => {
  const hamburgerClass = classNames({
    hamburger: true,
    'hamburger--active': isOpen,
  });

  return (
    <div className={hamburgerClass} onClick={onClick}>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  );
};

// Type of props

HamburgerButton.propTypes = {
  onClick: types.func,
  isOpen: types.bool.isRequired,
};

// Default value for props

HamburgerButton.defaultProps = {
  isOpen: false,
};
