import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useModal } from './useModal';
import Button from '../Button/Button.tsx';
import {
  ModalBackdrop,
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalTitle,
  CloseButton
} from './Modal.styles';
import FONTS_SIZES from '../../styles/Fonts.js';
import { COLORS } from '../../styles/colors.js';

const MODAL_SIZES = {
  small:"small",
  medium: "medium",
  large: "large",
}

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
   size = MODAL_SIZES.medium,   
  footer
}) => {
  const modalRef = useRef(null);
  const { handleKeyDown, handleBackdropClick } = useModal({ onClose, isOpen });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <ModalBackdrop 
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      
      role="presentation"
    >
      <ModalContainer 
        ref={modalRef}
        size={size}
        role="dialog"
        aria-modal="true"
        aria-labelledby={"modal-title" }
      >
        <ModalHeader>
          {title && <ModalTitle id="modal-title">{title}</ModalTitle>}
          
            <button 
            onClick={onClose}
            aria-label="Close modal"
            style={{ 
              background: COLORS.GRAY,
              border: 'none',
              cursor: 'pointer',
              fontSize: FONTS_SIZES.small,
              padding: '0.5rem 1rem',
              borderRadius: '4px'
            }}
          >
            ✕
          </button>



        </ModalHeader>
            <ModalBody>
          {children}
              </ModalBody>
        {footer && (
          <ModalFooter>
            {footer}
          </ModalFooter>
        )}
      </ModalContainer>
    </ModalBackdrop>,
    document.body
  );
};

export default Modal; 