import React from 'react';

// Modules

import classnames from 'classnames';
import types from 'prop-types';

// Styles

import './styles.scss';

// ----------------

export const ReactIcon = ({
  className,
  children,
  onClick,
  color,
  size,
  id,
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
  color: types.oneOf(['white', 'orange']),
  size: types.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']),
  id: types.string,
};

// Default value for props

ReactIcon.defaultProps = {
  size: 'sm',
};
