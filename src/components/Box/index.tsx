import React, { FC, ReactNode } from 'react';
import { Wrapper } from './styled';

interface BoxProps {
  children: ReactNode;
  className?: string;
}

const Box: FC<BoxProps> = ({ children, className, ...props }) => {
  return (
    <Wrapper {...props} className={className}>
      {children}
    </Wrapper>
  );
};

export default Box;
