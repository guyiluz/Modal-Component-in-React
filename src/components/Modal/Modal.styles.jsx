import styled from 'styled-components';
import { fadeIn, slideIn } from '../../styles/animations';
import { COLORS } from '../../styles/colors';
import FONTS_SIZES from '../../styles/Fonts';

const MODAL_PADDING = '1rem 1.2rem';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease-in;
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5);
  max-height: 90vh;
  overflow-y: auto;
  animation: ${slideIn} 0.2s ease-out;
  width: ${({ size }) => {
    switch (size) {
      case 'small': return '400px';
      case 'medium': return '600px';
      case 'large': return '800px';
      default: return '600px';
    }
  }};
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${MODAL_PADDING};
  border-bottom: 1px solid ${COLORS.BLACK};
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: ${FONTS_SIZES.medium};
  color: ${COLORS.BLACK};
`;
export const ModalBody = styled.div`
  padding: 1.2rem
`;

export const ModalFooter = styled.div`
  padding: ${MODAL_PADDING};
  border-top: 1px solid ${COLORS.GRAY};
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`; 

export const CloseButton = styled.button`
  background-color: ${COLORS.BLACK};
  color: ${COLORS.WHITE};
`;
