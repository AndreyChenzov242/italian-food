import React, { useEffect } from 'react';

// Modules

import classNames from 'classnames';
import PropTypes from 'prop-types';

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
