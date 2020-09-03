import React from 'react';

// Modules

import types from 'prop-types';
import { useCookies } from 'react-cookie';

// Components

import { Button } from '../Button';
import { CounterOfShoppingItems } from '../CounterOfShoppingItems';
import { addShopingItem, delShopingItem } from '../../сookie/setCookie';

// Styles

import './styles.scss';

// ----------------

export const TabsContent = ({ tabsContentData }) => {
  const [cookies, setCookie] = useCookies(['shoppingData']);

  if (cookies.shoppingData) {
    for (let index = 0; index < tabsContentData.length; index++) {
      tabsContentData[index].counter = cookies.shoppingData.filter(function (
        e
      ) {
        return e == tabsContentData[index].id;
      });
    }
  }

  return (
    <div className="content-wrapper">
      {tabsContentData.map((tabsItem, index) => {
        return (
          <div className="menu__card card" key={tabsItem.id}>
            <p className="card__title">{tabsItem.title}</p>
            <p className="card__descr">{tabsItem.description}</p>
            <div className="card__img-wrapper">
              <img
                className="card__img"
                src={tabsItem.img}
                alt={tabsItem.title}
              />
            </div>
            <p className="card__price">Price: {tabsItem.price}$</p>
            {tabsContentData[index].counter.length > 0 && (
              <CounterOfShoppingItems
                className="card__counter-wrapper"
                counter={tabsContentData[index].counter.length}
                id={tabsItem.id}
                onAdd={() => addShopingItem(tabsItem.id, cookies, setCookie)}
                onDel={() => delShopingItem(tabsItem.id, cookies, setCookie)}
              />
            )}
            {!tabsContentData[index].counter.length && (
              <Button
                color="orange"
                onClick={() => addShopingItem(tabsItem.id, cookies, setCookie)}
              >
                Add
              </Button>
            )}
          </div>
        );
      })}
    </div>
  );
};

// Type of props

TabsContent.propTypes = {
  tabsContentData: types.array.isRequired,
};
