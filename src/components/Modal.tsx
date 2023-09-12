import React, { FC } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

interface ModalProps {
  children: React.ReactNode;
}

const StyledModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
`;

const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  width: 100%;
  max-width: 400px;
  justify-content: center;
  transform: translate(-50%, -50%) scale(0.95);
  display: flex;
  align-items: center;

  @media (max-width: 660px) {
    max-width: calc(100% - 15px);
  }
`;

const StyledModalContent = styled.div`
  background: #fff;
  border-radius: 5px;
  width: calc(100% - 15px);
`;

const Modal: FC<ModalProps> = ({ children }) => {
  return ReactDom.createPortal(
    <StyledModalBox>
      <StyledModal>
        <StyledModalContent>{children}</StyledModalContent>
      </StyledModal>
    </StyledModalBox>,
    document.querySelector('.modal-container') as Element,
  );
};

export default Modal;
