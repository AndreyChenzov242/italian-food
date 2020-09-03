import React from 'react';

// Modules

import { FaRegTrashAlt } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import PropTypes from 'prop-types';

// Components

import { ReactIcon } from '../../ReactIcon';

// Styles

import './styles.scss';

// ----------------

export const ModalHeader = ({ onClose, title, titleIcon, onClear }) => {
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
          <div className="clear-btn__text">Clear</div>
        </div>
      )}
    </div>
  ) : null;
};

// Type of props

ModalHeader.propTypes = {
  onClose: PropTypes.func.isRequired,
  onClear: PropTypes.func,
  titleIcon: PropTypes.func,
  title: PropTypes.string,
};
