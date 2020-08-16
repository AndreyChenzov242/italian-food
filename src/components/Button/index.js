import React from 'react';

// Modules

import classnames from 'classnames';

//Styles

import './styles.scss';

//------------

export const Button = ({
  children,
  size = 'sm',
  margin,
  variant = 'outlined',
  color = 'white',
  onClick,
}) => {
  const buttonClass = classnames({
    button: true,
    [`button--size-${size}`]: size,
    [`button--${margin}`]: margin,
    [`button--color-${color}`]: color,
    [`button--variant-${variant}`]: variant,
  });

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};
