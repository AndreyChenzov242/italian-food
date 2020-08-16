import React from 'react';

// Modules

import classNames from 'classnames';
import types from 'prop-types';

// Components
import { Search } from '../../../../assets/svg/Search';
import logo from '../../../../assets/images/logo-md.png';
import { Navbar } from '../../../../components/Navbar';
import { navbarList } from '../../../../constans/navbarList';

// Styles

import './styles.scss';

// ----------------

export const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} />
      <div className="header__content-wrapper">
        <Navbar list={navbarList} />
        <form className="header__search-form">
          <input type="text" className="header__input" />
          <button>
            <Search />
          </button>
        </form>
      </div>
    </header>
  );
};
