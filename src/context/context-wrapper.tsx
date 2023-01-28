import React, { useState } from 'react';
import { GlobalContext } from './global-context';
import { storage } from '../storage/storage';

type Props = {
  children: React.ReactNode;
};

export const ContextWrapper: React.FC<Props> = ({ children }) => {
  const [monthIndex, setIndex] = useState(+storage.get('monthIndex'));

  const setMonthIndex = (value: number) => {
    storage.set('monthIndex', String(value));
    setIndex(value);
  };

  return (
    <GlobalContext.Provider value={{ monthIndex, setMonthIndex }}>
      {children}
    </GlobalContext.Provider>
  );
};
