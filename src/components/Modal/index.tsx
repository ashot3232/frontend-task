import React, { FC } from 'react';
import ReactDom from 'react-dom';
import { StyledModalBox, StyledModal, StyledModalContent } from './styled';

interface ModalProps {
  children: React.ReactNode;
}

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
