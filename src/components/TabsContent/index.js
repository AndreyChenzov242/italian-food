import React from 'react';

// Components

// Styles

import './styles.scss';

// ----------------

export const TabsContent = ({ data }) => {
  console.log(data);
  return (
    <div className="content-wrapper">
      {data.map((data, index) => {
        return (
          <div className="menu__card card" key={index}>
            <p className="card__title">{data.name}</p>
            <p className="card__descr">{data.description}</p>
            <img className="card__img" src={data.img} />
            <p className="card__price">Price: {data.price}$</p>
          </div>
        );
      })}
    </div>
  );
};
