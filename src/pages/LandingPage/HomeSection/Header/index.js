import React, { useState } from 'react';

// Components

import { HamburgerButton } from '../../../../components/HamburgerButton';
import { navbarList } from '../../../../constants/navbarList';
import { Sidebar } from '../../../../components/Sidebar';
import { Search } from '../../../../components/Search';
import { Navbar } from '../../../../components/Navbar';
import { Basket } from '../../../../components/Basket';
import { BasketModal } from './BasketModal';

// Assets

import logo from '../../../../assets/images/logo-md.png';

// Styles

import './styles.scss';

// ----------------

export const Header = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);

  const [modalrOpen, setModalOpen] = useState(false);

  function toggleSidebar() {
    setsidebarOpen(!sidebarOpen);
  }
  function toggleModal() {
    setModalOpen(!modalrOpen);
  }

  return (
    <header className="header">
      <a className="header__logo-wrapper" href="#">
        <img src={logo} alt="logo" />
      </a>
      <div className="header__content-wrapper">
        <Navbar navbarList={navbarList} />
        <form className="header__search-form search-form">
          <input type="text" className="search-form__input" />
          <button>
            <Search />
          </button>
        </form>
      </div>
      <HamburgerButton onClick={toggleSidebar} isOpen={sidebarOpen} />
      <Sidebar
        navbarList={navbarList}
        open={sidebarOpen}
        onClick={toggleSidebar}
      />
      <Basket onClick={toggleModal} />
      <BasketModal isOpen={modalrOpen} onClose={toggleModal} />
    </header>
  );
};
