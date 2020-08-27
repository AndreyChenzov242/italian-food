import React from 'react';

// Modules

import { CgClose } from 'react-icons/cg';

// Components

import { ReactIcon } from '../../ReactIcon';

// Styles

import './styles.scss';

// ----------------

export const ModalHeader = props => {
  const { onClose, title, titleIcon } = props;

  return onClose || title || titleIcon ? (
    <div className="modal-header">
      {titleIcon && (
        <ReactIcon
          className="modal-header__title-icon"
          onClick={onClose}
          size="xxl"
        >
          {titleIcon()}
        </ReactIcon>
      )}

      {title && <p className="modal-header__title">{title}</p>}

      {onClose && (
        <ReactIcon
          className="modal-header__close-btn"
          onClick={onClose}
          size="xxl"
        >
          <CgClose />
        </ReactIcon>
      )}
    </div>
  ) : null;
};
