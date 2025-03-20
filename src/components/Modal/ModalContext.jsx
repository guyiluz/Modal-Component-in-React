import React, { useState } from 'react';
import Modal from './Modal';
import { ModalContext } from './context';
  import { MODAL_SIZES } from './constants';

export function ModalProvider({ children }) {
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    title: '',
    content: null,
    size: MODAL_SIZES.medium,
    footer: null,
  });

  const openModal = (config) => {
    setModalConfig({
      ...config,
      isOpen: true,
    });
  };

  const closeModal = () => {
    setModalConfig(prev => ({
      ...prev,
      isOpen: false,
    }));
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Modal
        isOpen={modalConfig.isOpen}
        onClose={closeModal}
        title={modalConfig.title}
        size={modalConfig.size}
        footer={modalConfig.footer}
      >
        {modalConfig.content}
      </Modal>
    </ModalContext.Provider>
  );
} 