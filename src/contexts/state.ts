import React from 'react';

interface LoadingState {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>> | (() => void);
}

const loadingState: LoadingState = { isLoading: true, setIsLoading: () => {} };

export const LoadingContext = React.createContext(loadingState);
