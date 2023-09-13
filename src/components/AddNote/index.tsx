import React, { FC, useEffect, useState } from 'react';

import Modal from '../Modal';
import { addNote } from '../../store';
import { useThunk } from '../../hooks/useThunk';
import {
  StyledHeader,
  StyledTitle,
  StyledCloseIcon,
  StyledForm,
  StyledInput,
  StyledTextarea,
  StyledFormItem,
  StyledLabel,
  StyledButton,
} from './styled';

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
