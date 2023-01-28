import { createContext } from 'react';
import { storage } from '../storage/storage';

export const GlobalContext = createContext({
  monthIndex: +storage.get('monthIndex'),
  setMonthIndex: (i: number) => {}
});
