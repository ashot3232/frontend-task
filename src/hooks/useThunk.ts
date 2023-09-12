import { useState, useCallback } from 'react';
import { AsyncThunk } from '@reduxjs/toolkit';
import { useAppThunkDispatch } from '../store';

export function useThunk(thunk: AsyncThunk<any, any, any>) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const dispatch = useAppThunkDispatch();

  const runThunk = useCallback(
    (arg?: string) => {
      setIsLoading(true);
      dispatch(thunk(arg))
        .unwrap()
        .catch((err: Error) => setError(err))
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk],
  );

  return [runThunk, isLoading, error] as const;
}
