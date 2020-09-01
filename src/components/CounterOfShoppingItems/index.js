import React from 'react';

// Modules

import types from 'prop-types';
import classNames from 'classnames';
import { useCookies } from 'react-cookie';

// Components

import { ReactIcon } from '../ReactIcon';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

// Styles

import './styles.scss';

// ----------------

export const CounterOfShoppingItems = ({ onAdd, onDel, className, id }) => {
  const [cookies] = useCookies(['shoppingData']);

  const counterClass = classNames(
    {
      [`counter-wrapper`]: true,
    },
    className
  );

  let counter = 0;

  if (cookies.shoppingData) {
    counter = cookies.shoppingData.filter(function (e) {
      return e == id;
    });
  }
  return (
    <div className={counterClass}>
      <button>
        <ReactIcon size="xxxl" color="orange" onClick={onDel}>
          <AiOutlineMinusCircle />
        </ReactIcon>
      </button>
      <div className="counter__text">{counter.length}</div>
      <button>
        <ReactIcon size="xxxl" color="orange" onClick={onAdd}>
          <AiOutlinePlusCircle />
        </ReactIcon>
      </button>
    </div>
  );
};

CounterOfShoppingItems.propTypes = {
  onAdd: types.func.isRequired,
  onDel: types.func.isRequired,
  //counter: types.number.isRequired,
  className: types.string,
};

//() => delShopingItem(shoppingItem.id, cookies, setCookie)
