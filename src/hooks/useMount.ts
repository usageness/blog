import { useEffect } from 'react';

export const useMount = (func: () => void) => {
  useEffect(() => {
    func();
  }, []);
};

export default useMount;
