import React, { useEffect } from 'react';

// Modules

import classNames from 'classnames';
import PropTypes from 'prop-types';

// Components

import { Search } from '../../assets/svg/Search';

// Style

import './styles.scss';

//-------------

export const Sidebar = ({ list, open, onClick }) => {
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
          {list.map((item, index) => {
            return (
              <a
                href={`#${item.to}`}
                key={index}
                onClick={onClick}
                className="sidebar__item"
              >
                {item.name}
              </a>
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
  list: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

// Default value for props

Sidebar.defaultProps = {
  open: 'false',
};
