import React from 'react';

// Modules

import classnames from 'classnames';
import types from 'prop-types';

// Styles

import './styles.scss';

// ----------------

export const ContentWidthLimiter = ({ fullWidth, children }) => {
  const contentLiminterClass = classnames({
    'content-limiter': true,
    'content-limiter--full-width': fullWidth,
  });

  return <div className={contentLiminterClass}>{children}</div>;
};

// Type of props

ContentWidthLimiter.propTypes = {
  fullWidth: types.bool,
  children: types.node.isRequired,
};
