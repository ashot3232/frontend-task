import { StyledIconWrapper } from './styled';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';
import React from 'react';

export const getIcons = (label: string, sortBy: any, sortOrder: any) => {
  const upDownIcons = (
    <div>
      <StyledIconWrapper>
        <GoTriangleUp />
      </StyledIconWrapper>
      <StyledIconWrapper>
        <GoTriangleDown />
      </StyledIconWrapper>
    </div>
  );

  if (label !== sortBy) {
    return upDownIcons;
  }

  if (sortOrder === null) {
    return upDownIcons;
  } else if (sortOrder === 'asc') {
    return (
      <StyledIconWrapper>
        <GoTriangleUp />
      </StyledIconWrapper>
    );
  } else if (sortOrder === 'desc') {
    return (
      <StyledIconWrapper>
        <GoTriangleDown />
      </StyledIconWrapper>
    );
  }
};
