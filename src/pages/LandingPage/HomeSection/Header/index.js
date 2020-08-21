import React, { useState } from 'react';

// Components

import { Search } from '../../../../assets/svg/Search';
import logo from '../../../../assets/images/logo-md.png';
import { Navbar } from '../../../../components/Navbar';
import { Sidebar } from '../../../../components/Sidebar';
import { navbarList } from '../../../../constans/navbarList';
import { HamburgerButton } from '../../../../components/HamburgerButton';

// Styles

import './styles.scss';

// ----------------

export const Header = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);

  function toggleSidebar() {
    setsidebarOpen(!sidebarOpen);
  }

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
      <HamburgerButton onClick={toggleSidebar} isOpen={sidebarOpen} />
      <Sidebar list={navbarList} open={sidebarOpen} onClick={toggleSidebar} />
    </header>
  );
};
