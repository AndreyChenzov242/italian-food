import React from 'react';

// Modules

import types from 'prop-types';
import { useCookies } from 'react-cookie';

// Components

import { Button } from '../Button';

// Components

// Styles

import './styles.scss';

// ----------------

export const TabsContent = ({ data }) => {
  const [cookies, setCookie] = useCookies(['shoppingData']);

  console.log('cookies.shoppingData', cookies.shoppingData);

  const addShopingItem = id => {
    if (Object.keys(cookies).length) {
      setCookie('shoppingData', [...cookies.shoppingData, id], {
        path: '/',
      });
    } else {
      setCookie('shoppingData', id, {
        path: '/',
      });
    }
  };

  return (
    <div className="content-wrapper">
      {data.map(data => {
        return (
          <div className="menu__card card" key={data.id}>
            <p className="card__title">{data.title}</p>
            <p className="card__descr">{data.description}</p>
            <img className="card__img" src={data.img} alt={data.title} />
            <p className="card__price">Price: {data.price}$</p>
            <Button color="orange" onClick={() => addShopingItem(data.id)}>
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
  data: types.array.isRequired,
};
