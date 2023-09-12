import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

import Modal from './Modal';
import { addNote } from '../store';
import { useThunk } from '../hooks/useThunk';

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
  const [note, setNote] = useState({
    title: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [doCreateNote, isLoading, error] = useThunk(addNote);

  useEffect(() => {
    if (!isLoading && !error && submitted) {
      onClose();
    }
  }, [isLoading, error, onClose, submitted]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    doCreateNote(note);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNote((prevNote) => ({
      ...prevNote,
      [e.target.name]: e.target.value,
    }));
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
          <StyledInput
            value={note.title}
            onChange={handleChange}
            name="title"
            type="text"
          />
        </StyledFormItem>
        <StyledFormItem>
          <StyledLabel>Description</StyledLabel>
          <StyledTextarea
            name="description"
            value={note.description}
            onChange={handleChange}
          />
        </StyledFormItem>
        {error && <div>Error adding note</div>}
        {!error && (
          <StyledButton type="submit" disabled={isLoading}>
            Submit
          </StyledButton>
        )}
      </StyledForm>
    </Modal>
  );
};

export default AddNote;
