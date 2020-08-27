import React from 'react';

// Modules

import types from 'prop-types';
import { useCookies } from 'react-cookie';

// Components

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

  if (Object.keys(cookies).length) {
    var shoppingIsArray = Array.from(new Set(cookies.shoppingData));

    for (let index = 0; index < shoppingIsArray.length; index++) {
      shoppingItem = menuData.filter(function (e) {
        return e.id == shoppingIsArray[index];
      });

      shoppingSetArray[index] = { ...shoppingItem[0] };
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      width="md"
      title="Basket"
      titleIcon={CgShoppingCart}
    >
      {shoppingSetArray &&
        shoppingSetArray.map(shoppingItem => {
          return (
            <div key={shoppingItem.id}>
              <p>{shoppingItem.title}</p>
              <p>{shoppingItem.description}</p>
              <img src={shoppingItem.img} alt={shoppingItem.title} />
              <p>Price: {shoppingItem.price}$</p>
              {/* <Button color="orange" onClick={() => addShopingItem(shoppingItem.id)}>
            Add
          </Button> */}
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
