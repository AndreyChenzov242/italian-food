import React from 'react';

// Modules

import PropTypes from 'prop-types';
import { useCookies } from 'react-cookie';
import { CgShoppingCart } from 'react-icons/cg';

// Components

import { ReactIcon } from '../ReactIcon';

// ----------------

export const Basket = ({ onClick }) => {
  const [cookies] = useCookies(['shoppingData']);

  let counterOfShopItems = 0;

  if (Object.keys(cookies).length) {
    counterOfShopItems = new Set(cookies.shoppingData).size;
  }

  return (
    <div className="basket" onClick={onClick}>
      <ReactIcon size="xxxl" color="white">
        <CgShoppingCart />
      </ReactIcon>
      <div className="basket-counter">{counterOfShopItems}</div>
    </div>
  );
};

// Type of props

Basket.propTypes = {
  onClick: PropTypes.func,
};
