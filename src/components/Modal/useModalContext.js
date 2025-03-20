import { useContext } from 'react';
import { ModalContext } from './context.js';

export default function useModalContext() {
  const context = useContext(ModalContext);
  return context;
} 