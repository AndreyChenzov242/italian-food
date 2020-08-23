import React, { useState } from 'react';

// Modules

import classNames from 'classnames';
import types from 'prop-types';

// Components

import { ReactIcon } from '../ReactIcon';

// Styles

import './styles.scss';

// ----------------

export const Tabs = props => {
  const { linkFullWidth, defaultTab, content, links } = props;

  const [activeTabName, setActiveTabName] = useState(
    defaultTab || links[0].name
  );

  const handleTabSet = name => {
    setActiveTabName(name);
  };

  const tab = content.find(tab => tab.name === activeTabName);

  const linkClass = name =>
    classNames({
      'tabs__header-link': true,
      'tabs__header-link--active': name === activeTabName,
      'tabs__header-link--full-width': linkFullWidth,
    });

  return (
    <div className="tabs">
      <div className="tabs__header-scroll-wrapper">
        <div className="tabs__header">
          {links.map(link => {
            return (
              <div
                className={linkClass(link.name)}
                onClick={() => handleTabSet(link.name)}
                key={link.name}
              >
                {link.title}
              </div>
            );
          })}
        </div>
      </div>

      <div className="tabs__content">{tab.content()}</div>
    </div>
  );
};

// Type of props

Tabs.propTypes = {
  defaultTab: types.string,
  content: types.array.isRequired,
  links: types.array.isRequired,
};

// Default value for props

Tabs.defaultProps = {
  example: true,
};
