import React from 'react';

// Modules

import classNames from 'classnames';
import { Link } from 'react-scroll';

// Components


// Style

import './styles.scss';

//-------------

export const Sidebar = ({ list, open }) => {

  const sidebarClass = classNames({
    sidebar: true,
    [`sidebar--open`]: open,
  });


  return (
    <nav className={sidebarClass}>
      {list.map((item, index) => {
        return (
          <Link
            className="sidebar__item"
            isDynamic={true}
            duration={500}
            smooth={true}
            spy={true}
            to={item.to}
          >
            <p className="sidebar__text" key={index}>
              {item.name}
            </p>
          </Link>
        );
      })}
    </nav>
  );
};
