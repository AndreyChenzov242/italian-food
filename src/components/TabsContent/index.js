import React from 'react';

// Modules

import types from 'prop-types';
import { useCookies } from 'react-cookie';

// Components

import { Button } from '../Button';

// Components

import { shoppingData } from '../../mocks/shopingData';
import { useShoppingArray } from '../../hooks/useShoppingArray';

// Styles

import './styles.scss';

// ----------------

export const TabsContent = ({ data }) => {
  const [cookies, setCookie] = useCookies(['shoppingData']);

  const addShopingItem = id => {
    shoppingData.push(id);

    if (Object.keys(cookies).length) {
      setCookie('shoppingData', [...cookies.shoppingData, shoppingData], {
        path: '/',
      });
    } else {
      setCookie('shoppingData', [shoppingData], {
        path: '/',
      });
    }
  };
  // const showItem = () => {
  //   console.log('shoppingData', shoppingData);
  //   console.log('cookies', cookies);
  //   Object.keys(cookies).length ? console.log('true') : console.log('false');
  //   //console.log('cookies length', Object.keys(cookies).length == 0);
  // };

  return (
    <div className="content-wrapper">
      {data.map(data => {
        return (
          <div className="menu__card card" key={data.id}>
            <p className="card__title">{data.name}</p>
            <p className="card__descr">{data.description}</p>
            <img className="card__img" src={data.img} alt={data.name} />
            <p className="card__price">Price: {data.price}$</p>
            <Button color="orange" onClick={() => addShopingItem(data.id)}>
              Add
            </Button>
            {/* <Button color="orange" onClick={() => showItem()}>
              Show
            </Button> */}
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
