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
  let shoppingArrayOfObjects = [];
  let counterOfSameShoppingItems = [];
  let totalPrice = 0;

  if (Object.keys(cookies).length) {
    let shoppingArrayFromSet = Array.from(new Set(cookies.shoppingData));

    for (let index = 0; index < shoppingArrayFromSet.length; index++) {
      shoppingItem = menuData.filter(function (e) {
        return e.id == shoppingArrayFromSet[index];
      });

      shoppingArrayOfObjects[index] = { ...shoppingItem[0] };

      counterOfSameShoppingItems[index] = cookies.shoppingData.filter(function (
        e
      ) {
        return e == shoppingArrayFromSet[index];
      });

      Object.assign(shoppingArrayOfObjects[index], {
        ...shoppingArrayOfObjects[index],
        counter: counterOfSameShoppingItems[index].length,
      });

      totalPrice +=
        shoppingArrayOfObjects[index].price *
        counterOfSameShoppingItems[index].length;
    }
  }

  const addShopingItem = id => {
    setCookie('shoppingData', [...cookies.shoppingData, id], {
      path: '/',
    });
  };

  const delShopingItem = id => {
    for (let index = cookies.shoppingData.length; index >= 0; index--) {
      if (cookies.shoppingData[index] == id) {
        cookies.shoppingData.splice(index, 1);
        break;
      }
    }
    setCookie('shoppingData', [...cookies.shoppingData], {
      path: '/',
    });
  };

  console.log(cookies.shoppingData);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      width="md"
      title="Basket"
      titleIcon={CgShoppingCart}
      addModalClass="basket-modal"
    >
      {shoppingArrayOfObjects &&
        shoppingArrayOfObjects.map(shoppingItem => {
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
                </div>
                <div className="basket-modal__counter-wrapper">
                  <button>
                    <ReactIcon
                      size="xxxl"
                      color="orange"
                      onClick={() => delShopingItem(shoppingItem.id)}
                    >
                      <AiOutlineMinusCircle />
                    </ReactIcon>
                  </button>
                  <div className="counter__text">{shoppingItem.counter}</div>
                  <button>
                    <ReactIcon
                      size="xxxl"
                      color="orange"
                      onClick={() => addShopingItem(shoppingItem.id)}
                    >
                      <AiOutlinePlusCircle />
                    </ReactIcon>
                  </button>
                </div>
              </div>

              <p className="basket-modal__price">
                {shoppingItem.price * shoppingItem.counter}$
              </p>
            </div>
          );
        })}
      {!shoppingArrayOfObjects.length && <p>No item here</p>}
      <p>Total Price: {totalPrice}$</p>
    </Modal>
  );
};

// Type of props

BasketModal.propTypes = {
  isOpen: types.bool.isRequired,
  onClose: types.func.isRequired,
};
