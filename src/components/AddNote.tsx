import React, { FC } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

import Modal from './Modal';

const StyledHeader = styled.div`
  padding: 15px 25px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const StyledCloseIcon = styled(AiOutlineClose)`
  color: #8b8989;
  cursor: pointer;
  font-size: 23px;
`;

const StyledForm = styled.form`
  margin: 15px 25px 35px;
`;

const StyledInput = styled.input`
  height: 50px;
  width: 100%;
  outline: none;
  font-size: 17px;
  padding: 0 15px;
  border-radius: 4px;
  border: 1px solid #999;

  &:focus {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.11);
  }
`;

const StyledTextarea = styled.textarea`
  height: 150px;
  resize: none;
  padding: 8px 15px;
  width: 100%;
  outline: none;
  font-size: 17px;
  border-radius: 4px;
  border: 1px solid #999;

  &:focus {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.11);
  }
`;

const StyledFormItem = styled.div`
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  font-size: 18px;
  display: block;
  margin-bottom: 6px;
`;

const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 17px;
  border-radius: 4px;
  background: #04aa6d;
`;

type AddNoteProps = {
  onClose(): void;
};

const AddNote: FC<AddNoteProps> = ({ onClose }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onClose();
  };

  return (
    <Modal>
      <StyledHeader>
        <StyledTitle>Add a new note</StyledTitle>
        <StyledCloseIcon onClick={onClose} />
      </StyledHeader>
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormItem>
          <StyledLabel>Title</StyledLabel>
          <StyledInput type="text" />
        </StyledFormItem>
        <StyledFormItem>
          <StyledLabel>Description</StyledLabel>
          <StyledTextarea></StyledTextarea>
        </StyledFormItem>
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </Modal>
  );
};

export default AddNote;
