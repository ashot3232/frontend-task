import styled from 'styled-components';

export const StyledModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
`;

export const StyledModal = styled.div`
  position: absolute;
  top: 40%;
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

export const StyledModalContent = styled.div`
  background: ${(props) => props.theme.colors.background};
  border-radius: 5px;
  width: calc(100% - 15px);
`;
