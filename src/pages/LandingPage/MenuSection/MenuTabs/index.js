import React from 'react';

// Components

import { pizza, pasta, soups, salads } from '../../../../mocks/MenuData';
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
