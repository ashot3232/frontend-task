import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useThunk } from '../../hooks/useThunk';
import { fetchUser, useAppSelector } from '../../store';
import {
  Wrapper,
  ProfileImage,
  UserName,
  Details,
  BackLink,
  DetailText,
} from './styled';
import { motionConfig } from '../../config';

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

  return <motion.div {...motionConfig}>{content}</motion.div>;
};

export default UserDetails;
