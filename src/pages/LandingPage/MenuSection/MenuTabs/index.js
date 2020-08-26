import React from 'react';

// Components

import { TabsContent } from '../../../../components/TabsContent';
import { menuData } from '../../../../mocks/menuData';
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

  const pasta = menuData.filter(function (e) {
    return e.name === 'pasta';
  });

  const soups = menuData.filter(function (e) {
    return e.name === 'soups';
  });

  const salads = menuData.filter(function (e) {
    return e.name === 'salads';
  });

  const tabsContent = [
    {
      name: 'Pizza',
      content: () => <TabsContent tabsContentData={pizza} />,
    },
    {
      name: 'Pasta',
      content: () => <TabsContent tabsContentData={pasta} />,
    },
    {
      name: 'Soup',
      content: () => <TabsContent tabsContentData={soups} />,
    },
    {
      name: 'Salads',
      content: () => <TabsContent tabsContentData={salads} />,
    },
  ];

  return <Tabs content={tabsContent} links={tabsLinks} />;
};
