import React, { useEffect } from 'react';

// Modules

import { Link } from 'react-scroll';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Components

import { Search } from '../Search/index';

// Style

import './styles.scss';

//-------------

export const Sidebar = ({ navbarList, open, onClick }) => {
  useEffect(() => {
    if (open) {
      document.body.setAttribute('class', 'overflow-hidden');
    } else {
      document.body.removeAttribute('class');
    }
  }, [open]);

  const sidebarClass = classNames({
    sidebar: true,
    [`sidebar--open`]: open,
  });

  return (
    <div className={sidebarClass}>
      <div className="sidebar-wrapper">
        <nav className="sidebar__nav">
          {navbarList.map((item, index) => {
            return (
              <Link
                className="sidebar__item"
                to={item.to}
                key={index}
                onClick={onClick}
                duration={500}
                isDynamic={true}
                smooth={true}
                spy={true}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <form className="sidebar-form search-form">
          <input type="text" className="search-form__input" />
          <button>
            <Search />
          </button>
        </form>
      </div>

      <div className="sidebar__backdrop" onClick={onClick} />
    </div>
  );
};

// Type of props

Sidebar.propTypes = {
  navbarList: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};
