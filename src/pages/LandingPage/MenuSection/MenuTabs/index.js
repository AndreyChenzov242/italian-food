import React from 'react';

// Components

import { pizza, pasta, soups, salads } from '../../../../mocks/MenuData';
import { TabsContent } from '../../../../components/TabsContent';
import { Tabs } from '../../../../components/Tabs';

// ----------------

export const MenuTabs = () => {
  const tabsLinks = [
    { name: 'tabOne', title: 'Pizza' },
    { name: 'tabTwo', title: 'Pasta' },
    { name: 'tabThree', title: 'Soup' },
    { name: 'tabFour', title: 'Salads' },
  ];

  const tabsContent = [
    {
      name: 'tabOne',
      content: () => <TabsContent data={pizza} />,
    },
    {
      name: 'tabTwo',
      content: () => <TabsContent data={pasta} />,
    },
    {
      name: 'tabThree',
      content: () => <TabsContent data={soups} />,
    },
    {
      name: 'tabFour',
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
