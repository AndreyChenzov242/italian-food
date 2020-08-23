import React from 'react';

// Modules

import classNames from 'classnames';
import types from 'prop-types';

// Components

// import components

// Styles

import './styles.scss';

// ----------------

export const Name = props => {
  const { example } = props;

  const nameClass = () =>
    classNames({
      'name-class': true,
      'name-class--example': example,
    });

  return <div className={nameClass()}>Hello</div>;
};

// Type of props

Name.propTypes = {
  example: types.bool,
};

// Default value for props

Name.defaultProps = {
  example: true,
};
