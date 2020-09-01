export const addShopingItem = (id, cookies, setCookie) => {
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

export const delShopingItem = (id, cookies, setCookie) => {
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

export const delAllShoppingItems = setCookie => {
  setCookie('shoppingData', [], {
    path: '/',
  });
};
