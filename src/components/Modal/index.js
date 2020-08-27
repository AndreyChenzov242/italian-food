import React, { useEffect } from 'react';

// Modules

import { createPortal } from 'react-dom';
import classNames from 'classnames';

// Components

import { ModalHeader } from './ModalHeader';

// Styles

import './styles.scss';

// ----------------

export const Modal = ({
  bodyHeight,
  noPadding,
  closeIcon = true,
  children,
  onClose,
  width = 'sm',
  title,
  isOpen,
  titleIcon,
  addModalClass,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.setAttribute('class', 'overflow-hidden');
    } else {
      document.body.removeAttribute('class');
    }
  }, [isOpen]);

  const modalClass = classNames({
    modal: true,
    'modal--isOpen': isOpen,
    [`${addModalClass}`]: addModalClass,
  });

  const modalContent = classNames({
    modal__content: true,
    [`modal__content--width-${width}`]: width,
    [`modal__content--body-height-${bodyHeight}`]: bodyHeight,
  });

  const modalBodyClass = classNames({
    modal__body: true,
    'modal__content--no-padding': noPadding,
  });

  return createPortal(
    isOpen ? (
      <div className={modalClass}>
        <div className={modalContent}>
          {(title || (closeIcon && onClose)) && (
            <ModalHeader
              onClose={onClose}
              title={title}
              titleIcon={titleIcon}
            />
          )}

          <div className={modalBodyClass}>{children}</div>
        </div>

        <div className="modal__backdrop" onClick={onClose} />
      </div>
    ) : null,
    document.body
  );
};
