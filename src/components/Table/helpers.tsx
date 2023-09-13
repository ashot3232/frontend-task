import React from 'react';
import { StyledIconWrapper } from './styled';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';

import { Nullable, SortOrder } from '../../types';

export const getIcons = (
  label: string,
  sortBy: Nullable<string>,
  sortOrder: Nullable<SortOrder>,
) => {
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
  } else if (sortOrder === SortOrder.ASC) {
    return (
      <StyledIconWrapper>
        <GoTriangleUp />
      </StyledIconWrapper>
    );
  } else if (sortOrder === SortOrder.DESC) {
    return (
      <StyledIconWrapper>
        <GoTriangleDown />
      </StyledIconWrapper>
    );
  }
};
