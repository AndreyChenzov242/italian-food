import React from 'react';

// Components

import { Button } from '../../../components/Button';
import { ContentWidthLimiter } from '../../../components/ContentWidthLimiter';
import { MenuTabs } from './MenuTabs';

// Styles

import './styles.scss';

// ----------------

export const MenuSection = () => {
  return (
    <div className="section menu" id="menu">
      <ContentWidthLimiter>
        <div className="menu__title-wrapper">
          <div className="title">Menu</div>
          <div className="subtitle">
            Delicius food made with <span>love</span>
          </div>
        </div>
        <MenuTabs/>
      </ContentWidthLimiter>
    </div>
  );
};
