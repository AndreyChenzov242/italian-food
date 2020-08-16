import React, { Fragment } from 'react';

// Modules

import { Link } from 'react-scroll';

// Styles

import './styles.scss';

// ----------------

export const Navbar = props => {
  const { list } = props;

  return (
    <nav className="navbar">
      {list.map((item, index) => {
        return (
          <Fragment key={index}>
            <Link
              activeClass="navbar__item--active"
              className="navbar__item"
              isDynamic={true}
              duration={500}
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

// // Type of props

// Name.propTypes = {
//   example: types.bool,
// };

// // Default value for props

// Name.defaultProps = {
//   example: true,
// };
