import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Icon } from 'components';
import s from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', closeModal);
    return () => window.removeEventListener('keydown', closeModal);
  });

  const closeModal = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const onClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={onClick}>
      <div className={s.modal}>
        <Icon cn={s.icon} icon="close" w="28" onClick={onClose} />
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
