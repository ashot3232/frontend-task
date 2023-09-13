import React, { FC } from 'react';

interface FallbackProps {
  error?: Error;
}

const Fallback: FC<FallbackProps> = ({ error }) => {
  if (error) {
    return (
      <div>
        <h1>Something went wrong!</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

export default Fallback;
