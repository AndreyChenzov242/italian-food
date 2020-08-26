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

  //console.log(cookies.shoppingData);

  // const counter =
  //   Object.keys(cookies).length != 0 ? cookies.shoppingData.length : 0;
  // console.log(cookies.shoppingData);

  return (
    <div className="basket">
      <ReactIcon size="xxxl" color="white">
        <CgShoppingCart />
      </ReactIcon>
      <div className="basket-counter">{counter}</div>
    </div>
  );
};

// // Type of props

// Basket.propTypes = {
//   counter: PropTypes.string,
// };

// // Default value for props

// Basket.defaultProps = {
//   counter: '0',
// };
