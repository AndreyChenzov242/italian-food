import React from 'react';

// Modules

import { CgClose } from 'react-icons/cg';
import { FaRegTrashAlt } from 'react-icons/fa';

// Components

import { ReactIcon } from '../../ReactIcon';

// Styles

import './styles.scss';

// ----------------

export const ModalHeader = props => {
  const { onClose, title, titleIcon, onClear } = props;

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
      {onClear && (
        <div className="modal-header__clear-btn" onClick={onClear}>
          <ReactIcon size="md">
            <FaRegTrashAlt />
          </ReactIcon>
          <div className="clear-btn__text">Clear basket</div>
        </div>
      )}
    </div>
  ) : null;
};
