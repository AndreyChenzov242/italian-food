import React from 'react';

// Modules

import types from 'prop-types';
import { useCookies } from 'react-cookie';

// Components

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { Modal } from '../../../../../components/Modal';
import { Button } from '../../../../../components/Button';
import { CgShoppingCart } from 'react-icons/cg';
import { ReactIcon } from '../../../../../components/ReactIcon';
import { menuData } from '../../../../../mocks/menuData';

// Styles

import './styles.scss';

// ----------------

export const BasketModal = ({ isOpen, onClose }) => {
  const [cookies, setCookie] = useCookies(['shoppingData']);

  let shoppingItem = {};
  let shoppingSetArray = [];

  console.log(cookies.shoppingData);

  if (Object.keys(cookies).length) {
    var shoppingIsArray = Array.from(new Set(cookies.shoppingData));

    for (let index = 0; index < shoppingIsArray.length; index++) {
      shoppingItem = menuData.filter(function (e) {
        return e.id == shoppingIsArray[index];
      });

      shoppingSetArray[index] = { ...shoppingItem[0] };
    }
  }

  const counterOfSameShoppingItems = [];

  for (let index = 0; index < shoppingIsArray.length; index++) {
    counterOfSameShoppingItems[index] = cookies.shoppingData.filter(function (
      e
    ) {
      return e == shoppingIsArray[index];
    });
  }

  console.log(counterOfSameShoppingItems);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      width="md"
      title="Basket"
      titleIcon={CgShoppingCart}
      addModalClass="basket-modal"
    >
      {shoppingSetArray &&
        shoppingSetArray.map(shoppingItem => {
          return (
            <div className="basket-modal__card" key={shoppingItem.id}>
              <img
                className="basket-modal__img"
                src={shoppingItem.img}
                alt={shoppingItem.title}
              />
              <div className="basket-modal__content-wrapper">
                <div className="basket-modal__article">
                  <p className="basket-modal__title">{shoppingItem.title}</p>
                  <p className="basket-modal__descr">
                    {shoppingItem.description}
                  </p>
                </div>
                <div className="basket-modal__counter-wrapper">
                  <button>
                    <ReactIcon size="xxxl" color="orange">
                      <AiOutlineMinusCircle />
                    </ReactIcon>
                  </button>
                  <div className="counter__text">2</div>
                  <button>
                    <ReactIcon size="xxxl" color="orange">
                      <AiOutlinePlusCircle />
                    </ReactIcon>
                  </button>
                </div>
              </div>

              <p className="basket-modal__price">{shoppingItem.price}$</p>
            </div>
          );
        })}
    </Modal>
  );
};

// Type of props

BasketModal.propTypes = {
  isOpen: types.bool.isRequired,
  onClose: types.func.isRequired,
};
