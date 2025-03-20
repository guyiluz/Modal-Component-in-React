import useModalContext from './components/Modal/useModalContext.js'
import { Button } from './components/Button/Button.styles'
import { MODAL_SIZES } from './components/Modal/constants.js'
import styled from 'styled-components'
import { useCallback } from 'react';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

function App() {
  const { openModal, closeModal } = useModalContext();

  const handleOpenModal = useCallback(() => {
    openModal({
      title: "Example Modal",
      content: <p>Hello World</p>,
      size: MODAL_SIZES.medium,
      footer: (
        <>
          <Button onClick={() => closeModal()}>Cancel</Button>
          <Button onClick={() => closeModal()}>Confirm</Button>
        </>
      )
    });
  }, [openModal, closeModal]);

  return (
    <Container>
      <Button onClick={handleOpenModal}>
        Open Modal
      </Button>
    </Container>
  );
}

export default App
