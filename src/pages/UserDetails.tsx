import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { useThunk } from '../hooks/useThunk';
import { fetchUser, useAppSelector } from '../store';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const UserName = styled.h1`
  font-size: 24px;
  margin-top: 20px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const BackLink = styled(Link)`
  position: absolute;
  top: 70px;
  left: 20px;
  font-size: 18px;
  cursor: pointer;
`;

const DetailText = styled.p`
  font-size: 18px;
  margin: 5px 0;
`;

const UserDetails = () => {
  const params = useParams();
  const [doFetchUser, isLoading, error] = useThunk(fetchUser);
  const { data: user } = useAppSelector((state) => {
    return state.user;
  });

  useEffect(() => {
    doFetchUser(params.id);
  }, [doFetchUser, params]);

  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Error fetching data...</div>;
  } else if (user) {
    const name = `${user.firstName} ${user.lastName}`;
    content = (
      <Wrapper>
        <BackLink to="/users">Back</BackLink>
        <ProfileImage src={user.profileImage} alt="Profile" />
        <UserName>{name}</UserName>
        <Details>
          <DetailText>
            <b>Email:</b> {user.email}
          </DetailText>
          <DetailText>
            <b>Age:</b> {user.age}
          </DetailText>
        </Details>
      </Wrapper>
    );
  }

  return <div>{content}</div>;
};

export default UserDetails;
