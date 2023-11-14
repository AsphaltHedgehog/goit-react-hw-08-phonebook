import { useEffect } from "react";

import PropTypes from 'prop-types';

import EditForm from "components/EditForm/EditForm";

import css from './Modal.module.css'

function Modal({ contact, onClose }) {
  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    };
  });


  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); 
    }
  }

  return (
    <div onClick={handleOverlayClick} className={css.overlay}>
      <div className={css.modal}>
        <EditForm data={contact} onClose={ onClose } />
      </div>
    </div>
  );
};

Modal.propTypes = {
  contact: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;