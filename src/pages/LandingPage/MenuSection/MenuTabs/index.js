import React from 'react';

// Components

import { menuData } from '../../../../mocks/menuData';
import { TabsContent } from '../../../../components/TabsContent';
import { Tabs } from '../../../../components/Tabs';

// ----------------

export const MenuTabs = () => {
  const tabsLinks = [
    { name: 'Pizza', title: 'Pizza' },
    { name: 'Pasta', title: 'Pasta' },
    { name: 'Soup', title: 'Soup' },
    { name: 'Salads', title: 'Salads' },
  ];

  const pizza = menuData.filter(function (e) {
    return e.name === 'pizza';
  });
  console.log('pizza', pizza);

  const pasta = menuData.filter(function (e) {
    return e.name === 'pasta';
  });
  console.log('pasta', pasta);

  const soups = menuData.filter(function (e) {
    return e.name === 'soups';
  });
  console.log('soups', soups);

  const salads = menuData.filter(function (e) {
    return e.name === 'salads';
  });
  console.log('salads', salads);

  const tabsContent = [
    {
      name: 'Pizza',
      content: () => <TabsContent data={pizza} />,
    },
    {
      name: 'Pasta',
      content: () => <TabsContent data={pasta} />,
    },
    {
      name: 'Soup',
      content: () => <TabsContent data={soups} />,
    },
    {
      name: 'Salads',
      content: () => <TabsContent data={salads} />,
    },
  ];

  return (
    <Tabs
      linkFullWidth
      defaultTab={tabsLinks[0].name}
      content={tabsContent}
      links={tabsLinks}
    />
  );
};
