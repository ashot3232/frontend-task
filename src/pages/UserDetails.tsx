import React from 'react';
import { Link, useParams } from 'react-router-dom';

function UserDetails() {
  const params = useParams();

  return (
    <div>
      <Link to="/users">Back</Link>
      <p>User ID: {params.id}</p>
    </div>
  );
}

export default UserDetails;
