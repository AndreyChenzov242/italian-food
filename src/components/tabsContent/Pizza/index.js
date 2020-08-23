import React from 'react';

// Components

import { pizza } from '../../../mocks/MenuData';

// Styles

//import './styles.scss';

// ----------------

export const Pizza = () => {
  console.log(pizza[0].img);
  console.log(pizza[0].name);
  return (
    <div>
      {pizza.map((pizza, index) => {
        return (
          <div key={index}>
            <p>{pizza.name}</p>
            <p>{pizza.description}</p>
            <img src={pizza.img} />
          </div>
        );
      })}
    </div>
  );
};
