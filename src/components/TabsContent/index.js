import React from 'react';

// Modules

import types from 'prop-types';
import { useCookies } from 'react-cookie';

// Components

import { Button } from '../Button';

// Styles

import './styles.scss';

// ----------------

export const TabsContent = ({ tabsContentData }) => {
  const [cookies, setCookie] = useCookies(['shoppingData']);

  const addShopingItem = id => {
    if (Object.keys(cookies).length) {
      setCookie('shoppingData', [...cookies.shoppingData, id], {
        path: '/',
      });
    } else {
      setCookie('shoppingData', [id], {
        path: '/',
      });
    }
  };

  return (
    <div className="content-wrapper">
      {tabsContentData.map(tabsItem => {
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
            <Button color="orange" onClick={() => addShopingItem(tabsItem.id)}>
              Add
            </Button>
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
