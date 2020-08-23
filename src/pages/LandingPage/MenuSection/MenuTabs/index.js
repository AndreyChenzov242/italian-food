import React from 'react';

// Modules

import { FaPizzaSlice, FaEarlybirds, FaGitlab } from 'react-icons/fa';
import { Pizza } from '../../../../components/tabsContent/Pizza';

// Components

import { Tabs } from '../../../../components/Tabs';

// ----------------

export const MenuTabs = () => {
  const tabsLinks = [
    { name: 'tabOne', title: 'Pizza' },
    { name: 'tabTwo', title: 'Pasta' },
    { name: 'tabThree', title: 'Soup' },
    { name: 'tabFour', title: 'Juices' },
  ];

  const tabsContent = [
    {
      name: 'tabOne',
      content: () => Pizza(),
    },
    {
      name: 'tabTwo',
      content: () => <h1>TAB2</h1>,
    },
    {
      name: 'tabThree',
      content: () => <h1>TAB3</h1>,
    },
    {
      name: 'tabFour',
      content: () => <h1>TAB4</h1>,
    },
  ];

  return (
    <Tabs
      linkFullWidth
      defaultTab={tabsLinks[1].name}
      content={tabsContent}
      links={tabsLinks}
    />
  );
};
