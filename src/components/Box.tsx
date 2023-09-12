import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 250px;
  border-radius: 5px;
  padding: 15px 20px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  background: ${(props) => props.theme.colors.light};
`;

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
