import React from 'react';

// Modules

import types from 'prop-types';
import { useCookies } from 'react-cookie';
import {
  addShopingItem,
  delShopingItem,
  delAllShoppingItems,
} from '../../../../../сookie/setCookie';

// Components

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { Modal } from '../../../../../components/Modal';
import { Button } from '../../../../../components/Button';
import { CgShoppingCart } from 'react-icons/cg';
import { ReactIcon } from '../../../../../components/ReactIcon';
import { menuData } from '../../../../../mocks/menuData';
import { CounterOfShoppingItems } from '../../../../../components/CounterOfShoppingItems';

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

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      width="md"
      title="Basket"
      titleIcon={CgShoppingCart}
      addModalClass="basket-modal"
      onClear={() => delAllShoppingItems(setCookie)}
    >
      {shoppingArrayOfObjects &&
        shoppingArrayOfObjects.map(shoppingItem => {
          return (
            <div className="basket-modal__card" key={shoppingItem.id}>
              <div className="basket-modal__img-wrapper">
                <img
                  className="basket-modal__img"
                  src={shoppingItem.img}
                  alt={shoppingItem.title}
                />
              </div>

              <div className="basket-modal__content-wrapper">
                <div className="basket-modal__article">
                  <p className="basket-modal__title">{shoppingItem.title}</p>
                </div>
                <CounterOfShoppingItems
                  className="basket-modal__counter-wrapper"
                  counter={shoppingItem.counter}
                  onAdd={() =>
                    addShopingItem(shoppingItem.id, cookies, setCookie)
                  }
                  onDel={() =>
                    delShopingItem(shoppingItem.id, cookies, setCookie)
                  }
                />
              </div>

              <p className="basket-modal__price">
                {shoppingItem.price * shoppingItem.counter}$
              </p>
            </div>
          );
        })}
      {shoppingArrayOfObjects.length > 0 && (
        <div className="basket-modal__footer">
          <p className="basket-modal__total-price">
            Total price: <span> {totalPrice}$</span>
          </p>
          <Button className="basket-modal__buy-btn" color="orange" size="md">
            Buy now
          </Button>
        </div>
      )}
      {!shoppingArrayOfObjects.length && <p>No items here</p>}
    </Modal>
  );
};

// Type of props

BasketModal.propTypes = {
  isOpen: types.bool.isRequired,
  onClose: types.func.isRequired,
};
