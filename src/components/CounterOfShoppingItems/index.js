import React from 'react';

// Modules

import types from 'prop-types';
import classNames from 'classnames';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

// Components

import { ReactIcon } from '../ReactIcon';

// Styles

import './styles.scss';

// ----------------

export const CounterOfShoppingItems = ({
  onAdd,
  onDel,
  counter,
  className,
}) => {
  const counterClass = classNames(
    {
      [`counter-wrapper`]: true,
    },
    className
  );

  return (
    <div className={counterClass}>
      <button>
        <ReactIcon size="xxxl" color="orange" onClick={onDel}>
          <AiOutlineMinusCircle />
        </ReactIcon>
      </button>
      <div className="counter__text">{counter}</div>
      <button>
        <ReactIcon size="xxxl" color="orange" onClick={onAdd}>
          <AiOutlinePlusCircle />
        </ReactIcon>
      </button>
    </div>
  );
};

// Type of props

CounterOfShoppingItems.propTypes = {
  onAdd: types.func.isRequired,
  onDel: types.func.isRequired,
  counter: types.number.isRequired,
  className: types.string,
};
