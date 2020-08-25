import react, { useState, useEffect } from 'react';

import { shoppingData } from '../mocks/shopingData';

export const useShoppingArray = () => {
  const [shopingArray, setShopingArray] = useState([shoppingData]);

  useEffect(() => {
    const handleScroll = () => setShopingArray(shoppingData);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(shopingArray);
  console.log('state changed');

  return shopingArray;
};
