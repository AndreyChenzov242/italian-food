import React from 'react';

// Modules

import classnames from 'classnames';
import types from 'prop-types';

// Styles

import './styles.scss';

// ----------------

export const ReactIcon = ({
  className,
  color,
  size,
  onClick,
  id,
  children,
}) => {
  const reactIconClass = classnames(
    {
      'react-icon': true,
      [`react-icon--color-${color}`]: color,
      [`react-icon--size-${size}`]: size,
    },
    className
  );

  return (
    <div className={reactIconClass} onClick={onClick} id={id}>
      {children}
    </div>
  );
};

// Type of props

ReactIcon.propTypes = {
  className: types.string,
  onClick: types.func,
  color: types.oneOf(['yellow', 'white']),
  size: types.string,
  id: types.string,
};
