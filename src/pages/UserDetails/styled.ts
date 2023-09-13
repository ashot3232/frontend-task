import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const UserName = styled.h1`
  font-size: 24px;
  margin-top: 20px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const BackLink = styled(Link)`
  position: absolute;
  top: 70px;
  left: 20px;
  font-size: 18px;
  cursor: pointer;
`;

export const DetailText = styled.p`
  font-size: 18px;
  margin: 5px 0;
`;
