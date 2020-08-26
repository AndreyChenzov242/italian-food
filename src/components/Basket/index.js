import React from 'react';
import { useCookies } from 'react-cookie';

// Components

import { ReactIcon } from '../ReactIcon';
import { CgShoppingCart } from 'react-icons/cg';

// ----------------

export const Basket = ({}) => {
  const [cookies] = useCookies(['shoppingData']);

  let counter = 0;

  if (Object.keys(cookies).length) {
    var set = new Set(cookies.shoppingData);
    counter = set.size;
  }

  return (
    <div className="basket">
      <ReactIcon size="xxxl" color="white">
        <CgShoppingCart />
      </ReactIcon>
      <div className="basket-counter">{counter}</div>
    </div>
  );
};
