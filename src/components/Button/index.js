import React from 'react';

// Modules

import classNames from 'classnames';
import PropTypes from 'prop-types';

//Styles

import './styles.scss';

//------------

export const Button = ({
  children,
  size,
  margin,
  variant,
  color,
  onClick,
  uppercase,
}) => {
  const buttonClass = classNames({
    button: true,
    [`button--size-${size}`]: size,
    [`button--uppercase`]: uppercase,
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

// Type of props

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'fluid']),
  margin: PropTypes.string,
  variant: PropTypes.oneOf(['outlined', 'contained']),
  color: PropTypes.oneOf(['white', 'orange']),
  onClick: PropTypes.func,
  uppercase: PropTypes.bool,
};

// Default value for props

Button.defaultProps = {
  color: 'white',
  size: 'sm',
  variant: 'contained',
};
