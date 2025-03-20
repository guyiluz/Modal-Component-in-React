import styled from 'styled-components';
import { COLORS } from '../../styles/colors.js';
import FONTS_SIZES from '../../styles/Fonts.js';
export const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: ${FONTS_SIZES.medium};
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${COLORS.PRIMARY};
  color: ${COLORS.WHITE};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.PRIMARY_DARK};
  }
`; 