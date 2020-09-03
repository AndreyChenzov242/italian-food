import React, { Fragment } from 'react';

// Modules

import { Link } from 'react-scroll';
import types from 'prop-types';

// Styles

import './styles.scss';

// ----------------

export const Navbar = ({ navbarList }) => {
  return (
    <nav className="navbar">
      {navbarList.map((item, index) => {
        return (
          <Fragment key={index}>
            <Link
              activeClass="navbar__item--active"
              className="navbar__item"
              duration={500}
              isDynamic={true}
              smooth={true}
              spy={true}
              to={item.to}
            >
              <p className="navbar__text"> {item.name}</p>
            </Link>
          </Fragment>
        );
      })}
    </nav>
  );
};

// Type of props

Navbar.propTypes = {
  navbarList: types.array.isRequired,
};
