import React, { useEffect } from 'react';

// Modules

import { createPortal } from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Components

import { ModalHeader } from './ModalHeader';

// Styles

import './styles.scss';

// ----------------

export const Modal = ({
  bodyHeight,
  children,
  onClose,
  width,
  title,
  isOpen,
  titleIcon,
  className,
  onClear,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.setAttribute('class', 'overflow-hidden');
    } else {
      document.body.removeAttribute('class');
    }
  }, [isOpen]);

  const modalClass = classNames(
    {
      modal: true,
      'modal--isOpen': isOpen,
    },
    className
  );

  const modalContent = classNames({
    modal__content: true,
    [`modal__content--width-${width}`]: width,
    [`modal__content--body-height-${bodyHeight}`]: bodyHeight,
  });

  return createPortal(
    isOpen ? (
      <div className={modalClass}>
        <div className={modalContent}>
          {(title || onClose) && (
            <ModalHeader
              onClose={onClose}
              onClear={onClear}
              title={title}
              titleIcon={titleIcon}
            />
          )}
          {children}
        </div>
        <div className="modal__backdrop" onClick={onClose} />
      </div>
    ) : null,
    document.body
  );
};

// Type of props

Modal.propTypes = {
  width: PropTypes.oneOf(['xs', 'sm', 'md', 'min-content', 'full']).isRequired,
  children: PropTypes.node.isRequired,
  bodyHeight: PropTypes.string,
  className: PropTypes.string,
  titleIcon: PropTypes.func,
  onClick: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  onClear: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
};

// Default value for props

Modal.defaultProps = {
  width: 'sm',
};
