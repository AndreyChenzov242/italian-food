import React, { Fragment } from 'react';

// Modules

import { Link } from 'react-scroll';
import types from 'prop-types';

// Styles

import './styles.scss';

// ----------------

export const Navbar = ({ list }) => {
  return (
    <nav className="navbar">
      {list.map((item, index) => {
        return (
          <Fragment key={index}>
            <Link
              activeClass="navbar__item--active"
              className="navbar__item"
              isDynamic={true}
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
  list: types.array.isRequired,
};
