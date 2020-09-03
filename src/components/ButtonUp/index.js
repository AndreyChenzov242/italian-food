import React from 'react';

// Modules

import { BsChevronUp } from 'react-icons/bs';
import classNames from 'classnames';
import types from 'prop-types';

// Components

import { ReactIcon } from '../ReactIcon';

// Hooks

import { useCurrentPosition } from '../../hooks/useCurrentPosition';

// Styles

import './styles.scss';

// ----------------

export const ButtonUp = ({ visiblePosition, className }) => {
  const currentPosition = useCurrentPosition();

  const scrollTo = top =>
    window.scrollTo({
      behavior: 'smooth',
      top,
    });

  const buttonUpClass = classNames(
    'button-up',
    {
      'button-up--visible': currentPosition >= visiblePosition,
    },
    className
  );

  return (
    <div className={buttonUpClass} onClick={() => scrollTo(0)}>
      <ReactIcon size="xl">
        <BsChevronUp />
      </ReactIcon>
    </div>
  );
};

// Type of props

ButtonUp.propTypes = {
  visiblePosition: types.number,
  className: types.string,
};

// Default props

ButtonUp.defaultProps = {
  visiblePosition: 200,
};
