import React from 'react';
import { useCookies } from 'react-cookie';

// Components

import { ReactIcon } from '../ReactIcon';
import { CgShoppingCart } from 'react-icons/cg';

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